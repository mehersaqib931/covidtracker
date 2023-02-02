import React, {useEffect, useState} from 'react'
import { fetchDailyData } from '../../api';
import styles from './Chart.module.css';
// import Chart from 'chart.js/auto';
// import {chart as chartJS , ArcElement, Tooltip, Legend, CategoryScale} from 'chart.js';
// import {chart} from 'react-chartjs-2'
import {Line} from 'react-chartjs-2';
// Chart.register(CategoryScale, ArcElement, Tooltip, Legend);







const  Chart1=() =>{
  const [dailyData, setDailyData] = useState({});
  useEffect(()=>{
    const fetchapi = async ()=>{
      setDailyData(await fetchDailyData());

    }
    fetchapi();

  }, []);

  console.log(dailyData.cases)


  const LineChart= (
    Object.keys(dailyData).length
    ? (
    <Line
      data ={{
        labels:Object.keys(dailyData.cases).map((date)=>date),
        datasets:[{
          data: Object.values(dailyData.cases).map((cases)=>cases),
          label: "cases",
          borderColor: "#0000FF",
          fill: true,

        },{
          data: Object.values(dailyData.deaths).map((deaths)=>deaths),
          label: "deaths",
          borderColor: "#FF0000",
          fill: true,
        },{
          data: Object.values(dailyData.recovered).map((recovered)=>recovered),
          label: "recovered",
          borderColor: "#00FF00",
          fill: true,
        }]
      }}
    />):null
  )





  return (
    <div className={styles.container}>

    {LineChart}
  

    </div>
  )
}

export default Chart1;
