import {connect} from "react-redux";
import ListSech from "./ListSech";


const mapStateToProps = (state) => {
    return {
        seches: state.navbar.seches,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const ListSechesContainer = connect(mapStateToProps, mapDispatchToProps)(ListSech);

export default ListSechesContainer;