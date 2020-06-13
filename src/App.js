import React ,{ useState, useEffect }from 'react';
import logo from './logo.svg';
// import './App.css';
import './style2.css'

function App() {
  const [apiData, setApiData] = useState([
    {label: "A", percentage: 13},
    {label: "B", percentage: 70},
    ]);
  const [total ,setTotal] = useState(0.0);
  // let tempData= [] ;//changeable
  // let tempObj ={};
 let total_temp =0.0;
  function fetchExchangeData(){
    fetch("https://api.exchangeratesapi.io/latest")
.then(response => response.json())
.then(data => {
  for (let [key, value] of Object.entries(data.rates)) {

    //console.log(`${key}: ${value}`);
    total_temp=total_temp + value
    setTotal(total_temp)
    //tempObj = {label:{key}, percentage:{value}}
    //tempData.push(tempObj)
  }
  //JSON.parse(tempData)
console.log("my total",total);
console.log("got data", );
setApiData(data.rates);

});

  }
    useEffect(fetchExchangeData, []);
  return (
    // <div className="App">
    // <div>{total}</div>
    <div className="Container">    
    <div className="BarChart">
          {
            
          Object.entries(apiData).map(([key, value]) => (
          <div  className="BarChart-bar" style={{height: (value /{total}) + "%"}}>
          {key}
          </div>
          ))
          }
</div>
</div>
// </div>
  );
}

export default App;
