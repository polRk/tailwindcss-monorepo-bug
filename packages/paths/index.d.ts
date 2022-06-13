export declare const root: string

export declare const packages: string

export declare const apps: string

export declare const certs: {
    'local.betteraskbot.com': {
        cert: string
        key: string
    }
}

export declare function artifacts(app: string, name?: string): string

export declare function app(name: string): string

export declare function pkg(name: string): string

export declare function cdn(app: string): string
