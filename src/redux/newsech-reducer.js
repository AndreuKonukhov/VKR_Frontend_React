import axios from "axios";

const ADD_SECH = 'ADD-SECH';
const UPDATE_NEW_SECH = 'UPDATE-NEW-SECH-TEXT';
const SET_SECHES = 'SET_SECHES';

let initialState = {
    selectedNewSech: null,
    selectedNumSech: 1,
    filename: '',

};


const newSechReducer = (state = initialState, action) => {
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

export const updateNewSechActionCreator = (text) =>
    ({type: UPDATE_NEW_SECH, newText: text })
export const addSechActionCreator = () => ({type: ADD_SECH})

export default newSechReducer;