import React, {useState} from 'react';
import CounterButton from "./CounterButton";

type CounterPropsType = {
    countValue: number
    addValue: () => void
    resetValue: () => void
}

const Counter = (props: CounterPropsType) => {
    const [max, setMax] = useState(false)

    const onClickChangeValue = () => props.countValue < 5 ? props.addValue() : setMax(true)
    const onClickResetValue = () => {
        props.resetValue()
        setMax(false)
    }

    return (
        <div className='counterContainer'>
            <div className='counter'><span className={max ? 'maximum' : ''}>{props.countValue}</span></div>
            <div className='buttonContainer'>
                <CounterButton name={'INC'} callBack={onClickChangeValue} disabled={max}/>
                <CounterButton name={'RESET'} callBack={onClickResetValue} disabled={props.countValue === 0}/>
            </div>
        </div>
    );
};

export default Counter;