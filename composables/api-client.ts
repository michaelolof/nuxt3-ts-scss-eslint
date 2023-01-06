import { pathJoin } from "@/shared/uitils";

type APIUrl = string

type APIBody = RequestInit["body"] | Record<string, any>;

type APIParams = {
    key?: string
    query?: Record<string, any>
    params?: Record<string, any>
    body?: APIBody
    headers?: Record<string, string>
}

const base = {
    get(urlPath: APIUrl, options?: APIParams) {
        const url = pathJoin(useRuntimeConfig().public.BASE_API_URL, urlPath);
        const opts = {
            method: "GET",
            ...options,
        };
        return useFetch(url, opts);
    },

    post(urlPath: APIUrl, body?: APIBody, options?: APIParams) {
        const url = pathJoin(useRuntimeConfig().public.BASE_API_URL, urlPath);
        const opts = {
            method: "POST",
            body,
            ...options,
        };
        return useFetch(url, opts);
    },
};

export const $api = {
    base,
};