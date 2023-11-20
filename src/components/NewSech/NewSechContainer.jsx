import {connect} from "react-redux";
import NewSech from "./NewSech";
import {updateNewSechTextActionCreator, addSechActionCreator, setSeches} from "../../redux/navbar-reducer";

const mapStateToProps = (state) => {
    return {
        newSechNameText: state.navbar.newSechNameText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewNameSech: (text) => {
            let action = updateNewSechTextActionCreator(text);
            dispatch(action);
        },
        addSech: () => {
            dispatch(addSechActionCreator());
        }
    }
}

const NewSechContainer = connect(mapStateToProps, mapDispatchToProps)(NewSech);

export default NewSechContainer;