import {connect} from "react-redux";
import NewSech from "./NewSech";
import {updateNewSechActionCreator} from "../../redux/newsech-reducer";

const mapStateToProps = (state) => {
    return {
        newSechName: state.newsech.selectedNewSech,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewNameSech: (text) => {
            let action = updateNewSechActionCreator(text);
            dispatch(action);
        },
    }
}

const NewSechContainer = connect(mapStateToProps, mapDispatchToProps)(NewSech);

export default NewSechContainer;