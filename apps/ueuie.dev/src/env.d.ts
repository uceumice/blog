/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="@cloudflare/workers-types"  />

type KVNamespace = import('@cloudflare/workers-types/experimental').KVNamespace;
type ENV = {
    SERVER_URL: string;
    KV_BINDING: KVNamespace;
};
type Runtime = import('@astrojs/cloudflare').AdvancedRuntime<ENV>;

declare namespace App {
    interface Locals extends Runtime {
        user: {
            name: string;
            surname: string;
        };
    }
}

declare module 'astro/client' {
    // Override the existing Request type with Cloudflare's Request type
    export type Request = CloudflareRequest;
  }