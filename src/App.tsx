import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";


function App() {
    const [count, setCount] = useState(0)
    const [max, setMax] = useState(false)

    const addValue = () => count < 5 ? setCount(count + 1) : setMax(true)

    const resetValue = () => {
        setCount(0)
        setMax(false)
    }


    return (
        <div className="App">
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
