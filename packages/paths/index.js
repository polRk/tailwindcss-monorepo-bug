const { resolve } = require('node:path')

const root = resolve(__dirname, '../../')

const packages = resolve(root, 'packages')

const apps = resolve(root, 'apps')

function app(name) {
    return resolve(apps, name)
}

function pkg(name) {
    return resolve(packages, name)
}

module.exports = {
    root,
    packages,
    apps,
    app,
    pkg,
}
