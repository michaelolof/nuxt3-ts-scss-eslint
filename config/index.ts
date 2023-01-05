import { publicConfig } from "./env";
import { mockPublicConfig } from "./mocks.env";

export const getRuntimeConfig = () => {
    return process?.env?.MOCK_ENV === "1" ? mockPublicConfig : publicConfig;
};