const ADD_SECH = 'ADD-SECH';
const UPDATE_NEW_SECH_TEXT = 'UPDATE-NEW-SECH-TEXT';

let initialState = {
    seches: [
        {id: 1, nameSech: "Братск - Иркутск", countNN: 4},
        {id: 2, nameSech: "Ангара - Запад", countNN: 1},
        {id: 3, nameSech: "Челябинское", countNN: 2},
    ],
    newSechText: 'по умолчанию'
};

const navbarReducer = (state = initialState, action) => {
   
    switch(action.type) {
        case ADD_SECH:{
            let newSech = {
                id: 4,
                nameSech: state.newSechText, 
                countNN: 2
            };
            return {
                ...state,
                seches: [...state.seches, newSech],
                newSechText: 'Сброс'
            };
        }
        case UPDATE_NEW_SECH_TEXT: {
            return {
                ...state,
                newSechText: action.newText
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