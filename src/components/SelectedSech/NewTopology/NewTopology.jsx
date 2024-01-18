import React from 'react';
import s from './NewTopology.module.css'
import { LeftCircleOutlined } from '@ant-design/icons';
import UploadNewTopology from './UploadNewTopology/UploadNewTopology';
import Remont from './Remont/Remont';
import AddTopologyButton from './AddTopologyButton/AddTopologyButton';
import SelectCountRg from './SelectCountRg/SelectCountRg';
import SelectCriteriaMDP from './SelectCriteriaMDP/SelectCriteriaMDP';

const NewTopology = (props) => {

    const setTopologyPage = () => {
        props.setNewTopology(false)
    }

    let checkTopologyList = props.checkTopology?.map(p => <Remont name_vetv={p} />);
    const list_topology = () => {
        if (props.checkTopology.length !== 0) {
            return (
                <div className={s.remont_list}>
                    <div className={s.remont_list_text}>
                        Топология влияющих ветвей:
                    </div>
                    {checkTopologyList}
                </div>
            )
        }
    }

    return (
        <div className={s.content}>

            <div className={s.header}>
                <LeftCircleOutlined onClick={setTopologyPage} className={s.back} />
                <div className={s.newTopText}>Создание новой топологии</div>
            </div>

            <div className={s.area}>
                <UploadNewTopology checkFileTopology={props.checkFileTopology}
                    sech_num={props.sech_num}
                    deleteCheckTopology={props.deleteCheckTopology} />
                {list_topology()}
                
                <div className={s.selectCount}>
                    <SelectCountRg/>
                </div>

                <div className={s.selectCriteria}>
                    <SelectCriteriaMDP/>
                </div>

                <div className={s.saveButton}>
                    <AddTopologyButton setNewTopology={props.setNewTopology}/>
                </div>

            </div>

        </div>
    )
}

export default NewTopology;