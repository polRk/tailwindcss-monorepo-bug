import fastify from 'fastify'
import middiePlugin from '@fastify/middie'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { createServer } from 'vite'

// Run the server!
const start = async () => {
    const app = fastify()
    await app.register(middiePlugin)

    try {
        const devServer = await createServer({
            root: process.cwd(),
            server: {
                middlewareMode: 'ssr',
                watch: {
                    usePolling: true,
                    interval: 100,
                },
            },
        })

        app.use(devServer.middlewares)
        app.get('/', async (request, reply) => {
            try {
                let template = readFileSync(resolve('index.html'), 'utf-8')
                template = await devServer.transformIndexHtml('/', template)
                const render = (await devServer.ssrLoadModule('/src/entry-server.tsx')).render

                const appHtml = await render()

                const html = template
                    .replace(`<!--ssr-html-->`, appHtml)
                    .replace(`<!--ssr-state-->`, JSON.stringify({}))

                reply.status(200).header('Content-Type', 'text/html').send(html)
            } catch (e) {
                devServer.ssrFixStacktrace(e)
                console.log(e.stack)
                reply.status(500).send(e.stack)
            }
        })

        await app.listen({ port: 8080 })
        console.log(`Application ready on port: 8080`)
    } catch (err) {
        app.log.error(err)
        console.log(err)
        process.exit(1)
    }
}

start()
