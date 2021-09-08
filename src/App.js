import './App.css';
import Main from './components/Main';
import React, {useState, useEffect} from 'react';


function App() {

const [data, setData] = useState([]);

useEffect(() => {
  fetch("http://localhost:5000/plots")
  .then(results => results.json())
  .then(info => setData(info))
}, []);

if (data){
  return (
    <Main data={data}/>
  );
  }

  return(
    <p>Loading...</p>
  )
}

export default App;
