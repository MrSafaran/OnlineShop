import axios from "axios";

const base_url = 'https://firebasestorage.googleapis.com/v0/b/myshop-b4671.appspot.com/o/newapi.json?alt=media&token=66a56e69-c8f6-453e-9326-7ca75c233f5e'

const getProducts = async () => {
    const response = await axios.get(`${base_url}?`)
    return response.data;

}

export {getProducts};

