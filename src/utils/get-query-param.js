export const getQueryParam = (location, paramToGet) => new URLSearchParams(location).get(paramToGet);
