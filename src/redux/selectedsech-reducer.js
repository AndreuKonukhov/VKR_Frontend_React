import { API } from "../api/api";
import { message } from "antd";
import { getListSeches } from "./navbar-reducer";

const ADD_SECH = 'ADD-SECH';
const UPDATE_NEW_SECH_TEXT = 'UPDATE-NEW-SECH-TEXT';
const SET_SECH = 'SET_SECH';

let initialState = {
    sech: [],
    newSechNameText: 'по умолчанию'
};

const selectedSechReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_SECH: {
            let newSech = {
                id: 4,
                nameSech: state.newSechNameText,
                countNN: 0
            };
            return {
                ...state,
                seches: [newSech, ...state.seches],
                newSechNameText: 'Сброс'
            };
        }
        case UPDATE_NEW_SECH_TEXT: {
            return {
                ...state,
                newSechNameText: action.newText,
            }
        }

        case SET_SECH: {
            console.log(action, "вот action")
            return { ...state, sech: action.sech }
        }
        default:
            return state;
    }
}


export const addSechActionCreator = () => ({ type: ADD_SECH })
export const setSech = (sech) => ({ type: SET_SECH, sech })


//Thunks
export const getSech = (sech_num) => (dispatch) => {
    API.getSelectedSech(sech_num).then((response) => {
        dispatch(setSech(response.data))
    });
}

export const deleteSech = (sech_num) => (dispatch) => {
    API.deleteSech(sech_num).then((response) => {
        if (response.status == 200) {
            debugger
            dispatch(getListSeches())
            message.success('Сечение успешно удалено');
        }
    }).catch(error => {
        console.log("Ошибка запроса сечений для select", error.message)
    })
}


export default selectedSechReducer;