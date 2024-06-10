/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_COMMON_PUBLIC_GUID: string
    readonly VITE_COMMON_PRIVATE_GUID?: string
    readonly VITE_PRODUCTION_PRIVATE_STRING?: string
    readonly VITE_DEVELOPMENT_PRIVATE_STRING?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}