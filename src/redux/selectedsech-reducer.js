import { API } from "../api/api";
import { message } from "antd";
import { getListSeches } from "./navbar-reducer";


const SET_SECH = 'SET_SECH';
const SET_CHECK_TOPOLOGY = 'SET_CHECK_TOPOLOGY';
const SET_NEW_TOPOLOGY = 'SET_NEW_TOPOLOGY';

let initialState = {
    sech: [],
    newTopology: false,
    checkTopology: [],
};

const selectedSechReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_SECH: {
            return { ...state, sech: action.sech }
        }
        case SET_CHECK_TOPOLOGY: {
            return { ...state, checkTopology: action.checkTopology }
        }
        case SET_NEW_TOPOLOGY: {
            return { ...state, newTopology: action.newTopology }
        }
        default:
            return state;
    }
}



export const setSech = (sech) => ({ type: SET_SECH, sech })
export const setCheckTopology = (checkTopology) => ({ type: SET_CHECK_TOPOLOGY, checkTopology })
export const setNewTopology = (newTopology) => ({ type: SET_NEW_TOPOLOGY, newTopology })

//Thunks
export const getSech = (sech_num) => (dispatch) => {
    API.getSelectedSech(sech_num).then((response) => {
        console.log(`Сечение №${sech_num} загружено`)
        dispatch(setSech(response.data))
        dispatch(setNewTopology(false))
    });
}

export const deleteSech = (sech_num) => (dispatch) => {
    API.deleteSech(sech_num).then((response) => {
        if (response.status === 200) {
            dispatch(getListSeches())
            console.log(`Сечение №${sech_num} удалено`)
            message.success('Сечение успешно удалено');
        }
    }).catch(error => {
        console.log("Ошибка запроса сечений для select", error.message)
    })
}

export const checkFileTopology = (file) => (dispatch) => {
    API.checkFileTopology(file).then((response) => {
        dispatch(setCheckTopology(response.data))
        message.success('Топология успешно проверена');
    }).catch(error => {
        if (error.response.status==400){
            message.error(error.response.data.detail);
        }
        else{
            console.log("Ошибка", error.message)
        }
    })
}


export default selectedSechReducer;