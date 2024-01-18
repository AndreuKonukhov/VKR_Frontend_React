import React from 'react';
import s from './SelectedSech.module.css'
import SechInfo from './SechInfo/SechInfo';
import img from '../StartedPage/img.jpg'
import Topologyes from './Topologyes/Topologyes';
import NewTopology from './NewTopology/NewTopology';

const SelectedSech = (props) => {
    const activeTopologyPage = () => {
        if (props.state.newTopology) {
            return <NewTopology setNewTopology={props.setNewTopology}
                checkFileTopology={props.checkFileTopology} 
                sech_num={props.sech_num}
                checkTopology={props.state.checkTopology} 
                deleteCheckTopology={props.deleteCheckTopology}/>
        }
        else {
            return <Topologyes setNewTopology={props.setNewTopology} 
            deleteCheckTopology={props.deleteCheckTopology}/>
        }
    }

    return (
        <div className={s.content}>
            <SechInfo deleteSech={props.deleteSech} sech={props.state.sech} />
            {activeTopologyPage()}
            <img className={s.img} src={img} alt='Фон' />

        </div>
    )
}

export default SelectedSech;