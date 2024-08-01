import axios from "axios";
const apiBase = axios.create({});

const getAllTask = async () => {
    try {
        const result = apiBase.get(
            "https://665732539f970b3b36c854db.mockapi.io/api/v1/task"
        );
        return result;
    } catch (error) {
        console.log(error);
    }
};

const getOneTaskWithID = async (id) => {
    try {
        const result = apiBase.get(
            `https://665732539f970b3b36c854db.mockapi.io/api/v1/task/${id}`
        );
        return result;
    } catch (error) {
        console.log(error);
    }
};

const addTask = async (payload) => {
    try {
        const result = apiBase.post(
            `https://665732539f970b3b36c854db.mockapi.io/api/v1/task`,
            payload
        );
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
};

const deleteTask = async (id) => {
    try {
        const result = apiBase.delete(
            `https://665732539f970b3b36c854db.mockapi.io/api/v1/task/${id}`
        );
        return result;
    } catch (error) {
        console.log(error);
    }
};
export { getAllTask, getOneTaskWithID, addTask, deleteTask };
