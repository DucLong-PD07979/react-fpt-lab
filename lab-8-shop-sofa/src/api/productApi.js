import axios from "axios";

const apiBase = axios.create();

const getAllProduct = async () => {
    const response = await apiBase.get(
        "https://66abc184636a4840d7cbcb8b.mockapi.io/product"
    );
    return response.data;
};

export { getAllProduct };
