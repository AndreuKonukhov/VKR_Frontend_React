const ADD_SECH = 'ADD-SECH';
const UPDATE_NEW_SECH_TEXT = 'UPDATE-NEW-SECH-TEXT';

let initialState = {
    seches: [
        {nameSech: "Братск - Иркутск", countNN: 4},
        {nameSech: "Ангара - Запад", countNN: 1},
        {nameSech: "Челябинское", countNN: 2},
    ],
    newSechText: 'по умолчанию'
};

const navbarReducer = (state = initialState, action) => {
   
    switch(action.type) {
        case ADD_SECH:
            let newSech = {
                nameSech: state.newSechText, 
                countNN: 2
            };
            state.seches.push(newSech);
            state.newSechText = 'сброс';
            return state;
        case UPDATE_NEW_SECH_TEXT:
            state.newSechText = action.newText;
            return state;
        default:
            return state;
    }
}


export const addSechActionCreator = () => ({type: ADD_SECH})
export const updateNewSechTextActionCreator = (text) =>
    ({type: UPDATE_NEW_SECH_TEXT, newText: text })

export default navbarReducer;