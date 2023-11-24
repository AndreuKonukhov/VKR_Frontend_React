import React from "react";
import s from './SelectSech.module.css'
import axios from "axios";
import { Select, Tooltip } from 'antd';
import img from './img.png'


const url = "http://127.0.0.1:8000/sech_list/"
const result = await axios.get(url);
let sechElements = result.data.map(p => {
    return {
        label: p.server_name,
        options: p.seches.map(sech => { return { label: `(${sech.num_sech})  ${sech.name_sech}`, value: sech.name_sech } })
    }
})


class SelectSech extends React.Component {
    
    filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    onChange = (value) => {
        this.props.updateNewNameSech(value)
    };

    render() {
        return (
            <div>
                <div className={s.text}>
                    Контролируемое сечение
                    <Tooltip title="prompt text">
                        <img src={img} className={s.img} />
                    </Tooltip>
                </div>
                <Select
                    value={this.props.newSechName}
                    showSearch
                    defaultValue="Выберите контролируемое сечение"
                    optionFilterProp="children"
                    filterOption={this.filterOption}
                    style={{
                        width: 500,
                        height: 35,
                    }}
                    onChange={this.onChange}
                    options={sechElements}
                />
            </div>
        )
    }
}

export default SelectSech;