export let env: ImportMetaEnv;

export function loadEnv(): void {
  env = import.meta.env;
}

loadEnv();
