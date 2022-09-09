import React from 'react';

type CounterPropsType = {
    countValue: number
    max: boolean
}

const Counter = (props: CounterPropsType) => {



    return (
            <div className='counter'><span className={props.max ? 'maximum' : ''}>{props.countValue}</span></div>
    );
};

export default Counter;