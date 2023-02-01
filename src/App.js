import React from "react";

import {Cards, Chart1, CountryPicker} from './components';

import styles from './App.module.css';

import {fetchData} from './api';

class App extends React.Component{
  state={
    data:{},
    country:{},

  }




  async componentDidMount(){
    const fetchedData = await fetchData()
      this.setState({data:fetchedData})

  }
  handleCountryChange = async({country})=>{
    const fetchedData = await fetchData(country)
    this.setState({data:fetchedData, country:country})
 
    console.log(fetchedData);
    
  }
  render(){
    const {data, country} = this.state
    return(
      <div className={styles.container}>
      <Cards data1 = {data} country= {country}/>
      <CountryPicker handleCountryChange = {this.handleCountryChange}/>
      <Chart1/>
      
      </div>
    )
  }
}

export default App;