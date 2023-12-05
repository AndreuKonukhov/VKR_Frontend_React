import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import SelectedSech from './SelectedSech';
import { getSech, deleteSech } from '../../redux/selectedsech-reducer';

function SelectedPageCont(props) {
    let { sech_num } = useParams();
    console.log(props)
    useEffect(() => {
        props.getSech(sech_num)
    }, [sech_num]);

    return (
        <div>
            <SelectedSech deleteSech={props.deleteSech}
                sech={props.sech} />
        </div>
    );
}

let mapStateToProps = (state) => ({
    sech: state.selectedsech.sech
})

const SelectedPageContainer = connect(mapStateToProps, { getSech, deleteSech })(SelectedPageCont)
export default SelectedPageContainer
