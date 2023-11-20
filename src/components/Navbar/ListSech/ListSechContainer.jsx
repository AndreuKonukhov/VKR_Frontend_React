import {connect} from "react-redux";
import ListSech from "./ListSech";
import { setSeches } from "../../../redux/navbar-reducer";

const mapStateToProps = (state) => {
    return {
        seches: state.navbar.seches,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSeches: (seches) => {
            dispatch(setSeches(seches));
        },    
    }
}

const ListSechesContainer = connect(mapStateToProps, mapDispatchToProps)(ListSech);

export default ListSechesContainer;