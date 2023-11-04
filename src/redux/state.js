let store = {
    _state: {
        seches: [
            { name: "Братск-Иркутск", id: 1 },
            { name: "Ангара-Запад", id: 2 },
            { name: "Выдача мощности ТЭЦ-3", id: 3 }],
        newPostText: 'Братск-Иркутск'
    },

    getState() {
        debugger;
        return this._state
    },

    _callSubscriber() {
        console.log('State changed');
    },

    addSech() {
        let newSech = {
            name: this._state.newPostText,
            id: 4
        }
        this._state.seches.push(newSech);
        this._state.newPostText = '';
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText) {
        this._state.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer
    }
}

export default store
window.store = store;