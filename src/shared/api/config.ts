interface ConfigAPI {
    baseUrl: string;
    paths: {
        products: {
            getAll: string;
            addFeedback: string;
            product: (id: string) => string;
        };
        motherboards: {
            getAll: string;
            motherboard: (id: string) => string;
        };
        processors: {
            getAll: string;
            processor: (id: string) => string;
        };
        videocards: {
            getAll: string;
            videocard: (id: string) => string;
        };
        rams: {
            getAll: string;
            ram: (id: string) => string;
        };
        user: {
            refresh: string;
            register: string;
            login: string;
            logout: string;
            recovery: string;
            edit: string;
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
            addFeedback: "/products",
            getAll: "/products/",
            product: (id) => `/product/${id}`,
        },
        motherboards: {
            getAll: "/motherboards/",
            motherboard: (id) => `/motherboard/${id}`,
        },
        rams: {
            getAll: "/rams/",
            ram: (id) => `/ram/${id}`,
        },
        videocards: {
            getAll: "/videocards/",
            videocard: (id) => `/videocard/${id}`,
        },
        processors: {
            getAll: "/processors/",
            processor: (id) => `/processor/${id}`,
        },
        user: {
            register: "/user/register",
            login: "/user/login",
            logout: "/user/logout",
            refresh: "/user/refresh",
            recovery: "/user/recovery",
            edit: "/user/edit",
        },
    },
    user: {
        login: "userTest",
        password: "pass123",
    },
};
