import React from 'react';
import { Checkbox } from 'antd';
import s from './SelectCriteriaMDP.module.css'
import MyTooltip from '../../../Elements/MyTooltip/MyTooltip';



const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
    {
        label: '20% в исходн. режиме',
        value: 1,
    },
    {
        label: '8% в п.а.р.',
        value: 2,
    },
    {
        label: 'АДТН в п.а.р.',
        value: 3,
    },
];


const SelectCriteriaMDP = (props) => {

    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };

    return (
        <>
            <MyTooltip text='Определяющие критерии МДП' question='критерии' />
            <div className={s.content}>
                <Checkbox.Group
                    className={s.group}
                    defaultValue={[1, 2, 3]}
                    onChange={onChange}>
                    <Checkbox value={1} className={s.checkbox}>20% в исходн. режиме</Checkbox>
                    <Checkbox value={2} className={s.checkbox}>8% в п.а.р.</Checkbox>
                    <Checkbox value={3} className={s.checkbox}>АДТН в п.а.р.</Checkbox>
                </Checkbox.Group>
            </div>
        </>
    )
}

export default SelectCriteriaMDP;