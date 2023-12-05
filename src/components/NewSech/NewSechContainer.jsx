import { connect } from "react-redux";
import NewSech from "./NewSech";
import { updateNewSechActionCreator, setSechesView } from "../../redux/newsech-reducer";
import { getSechSelect } from "../../redux/newsech-reducer";
import React, { useEffect } from "react";
import { getListSeches } from "../../redux/navbar-reducer";

function NewSechesContainer(props) {
    useEffect(() => {
        if (props.sechesView.length === 0) {
            props.getSechSelect()
        }
    })

    return (
        <NewSech
            getListSeches = {props.getListSeches}
            sechesView={props.sechesView}
            selectedNewSech={props.selectedNewSech}
            updateNewNameSech={props.updateNewSechActionCreator}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        sechesView: state.newsech.sechesView,
        selectedNewSech: state.newsech.selectedNewSech,
    }
}

const NewSechContainer = connect(mapStateToProps,
    {
        updateNewSechActionCreator,
        getSechSelect,
        getListSeches
    })(NewSechesContainer);

export default NewSechContainer;