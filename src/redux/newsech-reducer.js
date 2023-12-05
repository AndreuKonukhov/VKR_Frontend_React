import { API } from "../api/api";

const ADD_SECH = 'ADD-SECH';
const UPDATE_NEW_SECH = 'UPDATE-NEW-SECH-TEXT';
const SET_SECHES_VIEW = 'SET_SECHES_VIEW';

let initialState = {
    sechesView: [],
    selectedNewSech: [],
    selectedNumSech: 1,
    filename: '',
};


const newSechReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SECHES_VIEW: {
            return { ...state, sechesView: action.sechesView }
        }
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
        case UPDATE_NEW_SECH: {
            return {
                ...state,
                selectedNewSech: action.newText,
            }
        }
        default:
            return state;
    }
}
export const setSechesView = (text) =>
    ({ type: SET_SECHES_VIEW, sechesView: text })
export const updateNewSechActionCreator = (text) =>
    ({ type: UPDATE_NEW_SECH, newText: text })
export const addSechActionCreator = () => ({ type: ADD_SECH })

//Thunks
export const getSechSelect = () => (dispatch) => {
    API.getSechSelect().
        then(response => {
            console.log(response)
            if (response.status == 200) {
                dispatch(setSechesView(response.data))
                console.log("Загружен перечень в select", response.data)
            }
        })
        .catch(error => {
            console.log("Ошибка запроса сечений для select", error.message)
        })
}




export default newSechReducer;
