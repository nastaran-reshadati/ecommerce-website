import server from "../configuration/Constants.json";

export const Get = (url) => {
 return fetch(`${server.SERVER_ADDRESS}${url}`);
};
