import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';

type SettingsPropsType = {
    minValue: number
    maxValue: number
    setMaxValue: Dispatch<SetStateAction<number>>
    setMinValue: Dispatch<SetStateAction<number>>
}

const Settings = (props: SettingsPropsType) => {
    const [error, setError] = useState(false)

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        if (value <= 0 || value <= props.minValue) {
            setError(true)
        } else {
            setError(false)
            props.setMaxValue(value)
        }
    }

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let value = Number(e.currentTarget.value)
        if (value <= 0 || value >= props.maxValue) {
            setError(true)
        } else {
            setError(false)
            props.setMinValue(value)
        }
    }

    return (
        <div className='settings'>
            <div>Max Value:  <input type='number' value={props.maxValue} onChange={onChangeMaxHandler} className={error ? 'error' : ''}/></div>
            <div>Min Value:  <input type='number' value={props.minValue} onChange={onChangeMinHandler} className={error ? 'error' : ''}/></div>
        </div>
    );
};

export default Settings;