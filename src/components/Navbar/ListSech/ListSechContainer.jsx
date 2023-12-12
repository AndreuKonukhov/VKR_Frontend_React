import { connect } from "react-redux";
import ListSech from "./ListSech";
import { getListSeches } from "../../../redux/navbar-reducer";
import React,  { useEffect } from "react";


function ListSechContainer(props) {
    
    useEffect(() => {
        if (props.seches === null){
            props.getListSeches()
        }
    });

    return (
        <ListSech seches={props.seches} />
    )
}


const mapStateToProps = (state) => {
    return {
        seches: state.navbar.seches,
    }
}


const ListSechesContainer = connect(mapStateToProps, { getListSeches })(ListSechContainer);


export default ListSechesContainer;
