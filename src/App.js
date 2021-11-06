import './App.css';
import Main from './components/Main';
import React, {useState, useEffect} from 'react';


function App() {

const [data, setData] = useState(null);
const url = "https://allotment-manager-default-rtdb.europe-west1.firebasedatabase.app/.json";

useEffect(() => {
  fetch(url)
  .then(results => results.json())
  .then(info => setData(info.plots))
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
