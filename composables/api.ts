import { pathJoin } from "@/shared/uitils";

// @ts-ignore
type APIUrl = string | Request | Ref<string | Request> | (() => (string | Request))

type APIParams = {
    key?: string
    method?: string
    // @ts-ignore
    query?: SearchParams
    // @ts-ignore
    params?: SearchParams
    body?: RequestInit["body"] | Record<string, any>
    headers?: { key: string, value: string }[]
    server?: boolean
    lazy?: boolean
    immediate?: boolean
    // @ts-ignore
    default?: () => DataT
    // @ts-ignore
    transform?: (input: DataT) => DataT
    pick?: string[]
    // @ts-ignore
    watch?: WatchSource[]
}

export const apiPuntr = {
    get(url: APIUrl, options?: APIParams) {
        const env = useRuntimeConfig();
        const opts = {
            method: "GET",
            ...options,
        };
        // @ts-ignore
        return useFetch(pathJoin(env.public.BASE_API_URL, url), opts);
    },

    post(url: APIUrl, body?: RequestInit["body"] | Record<string, any>, options?: APIParams) {
        const env = useRuntimeConfig();
        const opts = {
            method: "POST",
            body,
            ...options,
        };
        // @ts-ignore
        return useFetch(pathJoin(env.public.BASE_API_URL, url), opts);
    },
};