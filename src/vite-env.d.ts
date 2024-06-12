/// <reference types="vite/client" />

type ImportMetaEnv = {
    readonly VITE_COMMON_PUBLIC_GUID: string
    readonly VITE_COMMON_PRIVATE_GUID?: string
    readonly VITE_PRODUCTION_PRIVATE_STRING?: string
    readonly VITE_DEVELOPMENT_PRIVATE_STRING?: string
}

type ImportMeta = {
    readonly env: ImportMetaEnv
}