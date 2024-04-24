interface ConfigAPI {
    baseUrl: string;
    paths: {
        products: {
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

const BASE_URL = process.env.REACT_APP_URL || "http://localhost:3030/";

console.log("process.env.REACT_APP_URL", process.env.REACT_APP_URL);

console.log();

console.log("process.env", process.env);

export const config: ConfigAPI = {
    baseUrl: BASE_URL,
    paths: {
        products: {
            getAll: "/products/",
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
