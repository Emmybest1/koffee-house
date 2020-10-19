import axios from "axios";

export const getRequest = async (url) => {
    const request = await axios({
        method: "get",
        url,
    });
    return request;
};

export const postRequest = async (url, data = {}) => {
    const request = await axios({
        method: "post",
        url,
        data,
    });
    return request;
};

export const putRequest = async (url, data = {}) => {
    const request = await axios({
        method: "put",
        url,
        data,
    });
    return request;
};

export const deleteRequest = async (url) => {
    const request = await axios({
        method: "delete",
        url,
    });
    return request;
};

export const patchRequest = async (url, data = {}) => {
    const request = await axios({
        method: "get",
        url,
        data,
    });
    return request;
};

export const getRequestt = async (endpoint) => {
    return endpoint;
};

export default {
    getRequest,
    postRequest,
    putRequest,
    patchRequest,
    deleteRequest,
    getRequestt,
};
