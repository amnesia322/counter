import React from 'react';

type CounterButtonType = {
    name: string
    callBack: (min?: number, max?: number)=> void
    disabled?: boolean
}

const CounterButton = (props: CounterButtonType) => {
    const onClickHandler = () => props.callBack()

    return (
        <button onClick={onClickHandler} disabled={props.disabled} className='but'>
            {props.name}
        </button>
    );
};

export default CounterButton;