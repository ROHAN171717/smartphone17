import axios from 'axios';

const phoneUrl='https://smartphone-rohan.herokuapp.com';


export const getPhones= async(id)=>{
    return await axios.get(`${phoneUrl}/`)
}

export const getPhoneById = async (id) => {
    return await axios.get(`${phoneUrl}/${id}`);
}

export const addPhone = async (phone) => {
    return await axios.post(`${phoneUrl}/add`, phone);
}

export const deletePhone = async (id) => {
    return await axios.delete(`${phoneUrl}/${id}`);
}

export const editPhone = async (id, phone) => {
    return await axios.put(`${phoneUrl}/${id}`, phone)
}