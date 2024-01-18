import React from 'react';
import s from './SelectCountRg.module.css'
import { InputNumber} from 'antd';
import MyTooltip from '../../../Elements/MyTooltip/MyTooltip';

const SelectCountRg = (props) => {

    const onChange = (value) => {
        console.log('changed', value);
    };

    return (
        <>
            <MyTooltip text='Кол-во искусственно-сгенерированных режимов'
                question='Инфо' />

            <InputNumber className={s.selecter}
                min={1000}
                max={50000}
                defaultValue={10000}
                step={1000}
                onChange={onChange}
            />
        </>
    )
}

export default SelectCountRg;