import axios from "axios";

const ADD_SECH = 'ADD-SECH';
const UPDATE_NEW_SECH_TEXT = 'UPDATE-NEW-SECH-TEXT';
const SET_SECHES = 'SET_SECHES';

let initialState = {
    seches: [],
    newSechNameText: 'по умолчанию'
};

if (initialState.seches.length === 0) {
   axios.get("http://127.0.0.1:8000/seches/")
       .then(response => {
           initialState.seches = response.data;
       });
}

const navbarReducer = (state = initialState, action) => {
   
    switch(action.type) {
        case ADD_SECH:{
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
            return { ...state, seches: [ ...state.seches, ...action.seches ]}
        }
        default:
            return state;
    }
}


export const addSechActionCreator = () => ({type: ADD_SECH})
export const updateNewSechTextActionCreator = (text) =>
    ({type: UPDATE_NEW_SECH_TEXT, newText: text })
export const setSeches = (seches) => ({type: SET_SECHES, seches })
export default navbarReducer;