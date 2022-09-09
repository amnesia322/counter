import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";


function App() {
    const [count, setCount] = useState(0)

    const addValue = () => setCount(count + 1)

    const resetValue = () => setCount(0)


    return (
        <div className="App">
            <Counter countValue={count} addValue={addValue} resetValue={resetValue}/>
        </div>
    );
}

export default App;
