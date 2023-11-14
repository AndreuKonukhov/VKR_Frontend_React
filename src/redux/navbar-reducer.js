const ADD_SECH = 'ADD-SECH';
const UPDATE_NEW_SECH_TEXT = 'UPDATE-NEW-SECH-TEXT';

let initialState = {
    seches: [
        {id: 1, nameSech: "Братск - Иркутск", countNN: 4},
        {id: 2, nameSech: "Ангара - Запад", countNN: 1},
        {id: 3, nameSech: "Челябинское", countNN: 2},
    ],
    newSechNameText: 'по умолчанию'
};

const navbarReducer = (state = initialState, action) => {
   
    switch(action.type) {
        case ADD_SECH:{
            let newSech = {
                id: 4,
                nameSech: state.newSechNameText, 
                countNN: 2
            };
            return {
                ...state,
                seches: [...state.seches, newSech],
                newSechNameText: 'Сброс'
            };
        }
        case UPDATE_NEW_SECH_TEXT: {
            return {
                ...state,
                newSechNameText: action.newText
            }
        }
        default:
            return state;
    }
}


export const addSechActionCreator = () => ({type: ADD_SECH})
export const updateNewSechTextActionCreator = (text) =>
    ({type: UPDATE_NEW_SECH_TEXT, newText: text })

export default navbarReducer;