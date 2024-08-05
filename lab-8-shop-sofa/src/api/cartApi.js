import axios from "axios";

const apiBase = axios.create();

const getCartWithUserId = async (id) => {
    const response = await apiBase.get(
        `https://66abc184636a4840d7cbcb8b.mockapi.io/cart/${id}`
    );
    return response.data;
};

const updateCartWithIdUser = async (id, cart) => {
    const response = await apiBase.put(
        `https://66abc184636a4840d7cbcb8b.mockapi.io/cart/${id}`,
        cart
    );
    return response.data;
};

export { getCartWithUserId, updateCartWithIdUser };
