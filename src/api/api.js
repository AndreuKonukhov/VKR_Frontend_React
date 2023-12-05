import axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/',
});

export const API = {
    getSelectedSech(sech_num) {
        return instance.get(`http://127.0.0.1:8000/seches/` + sech_num);
    },

    getSechesNavbar() {
        return instance.get("http://127.0.0.1:8000/seches/");
    },

    getSechSelect() {
        return instance.get("http://127.0.0.1:8000/sech_list/");
    },

    deleteSech(sech_num) {
        return instance.delete(`http://localhost:8000/sech/delete/` + sech_num);
    },
}