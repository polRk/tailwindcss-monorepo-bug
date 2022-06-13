/// <reference types="vite/client" />

declare namespace NodeJS {
    export interface ProcessEnv {
        ARTIFACT_NAME: string
        YDB_ENDPOINT: string
        YDB_DATABASE: string
        YDB_SERVICE_ACCOUNT_KEY_FILE_CREDENTIALS: string
    }
}

interface Window {
    __PRELOADED_STATE__: string
}
