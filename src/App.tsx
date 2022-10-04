import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import Settings from "./components/Settings";


function App() {
    const [max, setMax] = useState(false)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [count, setCount] = useState(minValue)



    const addValue = () => count < maxValue ? setCount(count + 1) : setMax(true)

    const resetValue = () => {
        setCount(minValue)
        setMax(false)
    }

    const setValues = () => {
setCount(minValue)
        setMax(false)
    }



    return (
        <div className="App">
            <div className='counterContainer'>
                <Settings minValue={minValue} maxValue={maxValue} setMaxValue={setMaxValue} setMinValue={setMinValue}/>
                <div className='buttonContainer'>
                    <CounterButton name={'SET'} callBack={setValues} disabled={false}/>
                </div>
            </div>
            <div className='counterContainer'>
                <Counter countValue={count} max={max}/>
                <div className='buttonContainer'>
                    <CounterButton name={'INC'} callBack={addValue} disabled={max}/>
                    <CounterButton name={'RESET'} callBack={resetValue} disabled={count === 0}/>
                </div>
            </div>

        </div>
    );
}

export default App;
