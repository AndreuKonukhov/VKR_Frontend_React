import { API } from "../api/api";

const ADD_SECH = 'ADD-SECH';
const UPDATE_NEW_SECH_TEXT = 'UPDATE-NEW-SECH-TEXT';
const SET_SECHES = 'SET_SECHES';

let initialState = {
    seches: null,
    newSechNameText: 'по умолчанию'
};

const navbarReducer = (state = initialState, action) => {

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

        case SET_SECHES: {
            return { ...state, seches: action.seches }
        }
        default:
            return state;
    }
}


export const addSechActionCreator = () => ({ type: ADD_SECH })
export const updateNewSechTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_SECH_TEXT, newText: text })
export const setSeches = (seches) => ({ type: SET_SECHES, seches })

//Thunks
export const getListSeches = () => (dispatch) => {
    API.getSechesNavbar().
        then(response => {
            if (response.status == 200) {
                dispatch(setSeches(response.data))
                console.log(`Загружены сечения в Navbar:`, response.data)
            }
        })
        .catch(error => {
            console.log("Ошибка запроса сечений", error.message)
        })
}

export default navbarReducer;