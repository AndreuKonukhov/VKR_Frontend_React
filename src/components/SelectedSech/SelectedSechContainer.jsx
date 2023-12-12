import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import SelectedSech from './SelectedSech';
import { getSech, deleteSech, setNewTopology, checkFileTopology } from '../../redux/selectedsech-reducer';

function SelectedSechCont(props) {
    let { sech_num } = useParams();

    useEffect(() => {
        props.getSech(sech_num)
    }, [sech_num]);

    return (
        <div>
            <SelectedSech deleteSech={props.deleteSech}
                sech_num = {sech_num}
                checkFileTopology = {props.checkFileTopology}
                setNewTopology={props.setNewTopology}
                state={props.state} />
        </div>
    );
}

let mapStateToProps = (state) => ({
    state: state.selectedsech
})

const SelectedSechContainer = connect(mapStateToProps, { getSech, deleteSech, setNewTopology, checkFileTopology })(SelectedSechCont)
export default SelectedSechContainer
