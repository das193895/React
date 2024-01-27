import {useState} from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0);

  function addValue(){
    if(counter >= 20){
      setCounter(counter = 20)
    }
    else{
      setCounter(counter+1);
    }
   
  }

  function removeValue(){
    if(counter <= 0){
      setCounter(counter = 0)
    }

    else{
      setCounter(counter-1);
    }

  }

  return (
    <>
      <h1>counter project</h1>
      <br />
      {counter}
      <br />
      <button onClick={addValue}>Click to add</button>
      <br />
      <button onClick={removeValue}>Click to Remove</button>
    </>
  )
}

export default App
