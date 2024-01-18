import React from 'react';
import s from './Topologyes.module.css'
import AddTopologyButton from './AddTopologyButton/AddTopologyButton';

const Topologyes = (props) => {
    return (
        <div className={s.content}>
            <div className={s.topolog}>
                <span>Топологии сети</span>
                <AddTopologyButton setNewTopology={props.setNewTopology}
                    deleteCheckTopology={props.deleteCheckTopology} />
            </div>
        </div>
    )
}

export default Topologyes;