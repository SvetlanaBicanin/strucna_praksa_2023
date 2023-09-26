import axios from "axios";

const FORM = "http://localhost:8555";



export const getForms = async () => {
    return await axios.get(`${FORM}/api/v1/Form`);
};


export const createForm = async (body) => {
    return await axios.post(`${FORM}/api/v1/Form`, body);
};



export const deleteForm = async (id) => {
    return await axios.delete(`${FORM}/api/v1/Form/${id}`);
};
