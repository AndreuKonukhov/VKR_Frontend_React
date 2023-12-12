import axios from "axios";

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/',
});

export const API = {
    getSelectedSech(sech_num) {
        return instance.get(`seches/` + sech_num);
    },

    getSechesNavbar() {
        return instance.get("seches/");
    },

    getSechSelect() {
        return instance.get("sech_list/");
    },

    deleteSech(sech_num) {
        return instance.delete(`sech/delete/` + sech_num);
    },

    checkFileTopology(file) {
        const formData = new FormData();
        formData.append('file', file);
        return instance.post('/newTopology/checkFileTopology/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}