interface ConfigAPI {
    baseUrl: string;
    paths: {
        products: {
            getAll: string;
        };
        motherboards: {
            getAll: string;
        };
        processors: {
            getAll: string;
        };
        videocards: {
            getAll: string;
        };
        rams: {
            getAll: string;
        };
        user: {
            refresh: string;
            register: string;
            login: string;
            logout: string;
        };
    };
    user: {
        login: string;
        password: string;
    };
}

const BASE_URL = import.meta.env.VITE_REACT_API_URL || "http://localhost:3030/";

export const config: ConfigAPI = {
    baseUrl: BASE_URL,
    paths: {
        products: {
            getAll: "/products/",
        },
        motherboards: {
            getAll: "/motherboards/",
        },
        rams: {
            getAll: "/rams/",
        },
        videocards: {
            getAll: "/videocards/",
        },
        processors: {
            getAll: "/processors/",
        },
        user: {
            register: "/user/register",
            login: "/user/login",
            logout: "/user/logout",
            refresh: "/user/refresh",
        },
    },
    user: {
        login: "userTest",
        password: "pass123",
    },
};
