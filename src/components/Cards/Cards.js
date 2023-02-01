import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CountUp from 'react-countup';

import styles from './Cards.module.css';
import cx from 'classnames';

const  Cards=({data1}) =>{
  // console.log(data1)
  return (
    <div className={styles.container}>
    <Grid container spacing = {3} justify = "center">
    <Grid item component = {Card}  xs= {12} md = {3} className={cx(styles.card, styles.cases)}>
    <CardContent>
      <Typography color = "textSecondry" gutterBottom>Total Cases:</Typography>
      <Typography color = "textSecondry" gutterBottom>
        <CountUp start={0} end = {data1.cases} duration ={2.5} separator = ","/>
      </Typography>
    </CardContent>

    </Grid>
    <Grid  item component = {Card} xs= {12} md = {3} className={cx(styles.card, styles.recovered)}>
    <CardContent>
      <Typography color = "textSecondry" gutterBottom>Total Recoverd</Typography>
      <Typography variant="h5">
      <CountUp start={0} end = {data1.recovered} duration ={2.5} separator = ","/>
      </Typography>
      {/* <Typography color = "textSecondry" >Today data</Typography>
      <Typography variant="body2">total number Recovered cases untill today</Typography> */}
    </CardContent>

    </Grid>
    <Grid item component = {Card} xs= {12} md = {3} className={cx(styles.card, styles.deaths)}>
    <CardContent>
      <Typography color = "textSecondry" gutterBottom>Total Deaths</Typography>
      <Typography variant="h5">
      <CountUp start={0} end = {data1.deaths} duration ={2.5} separator = ","/>
      </Typography>
    </CardContent>

    </Grid>
    <Grid item component = {Card} xs= {12} md = {3} className={cx(styles.card, styles.critical)}>
    <CardContent>
      <Typography color = "textSecondry" gutterBottom>Total Criritical Untill Today</Typography>
      <Typography variant="h5">
      <CountUp start={0} end = {data1.critical} duration ={2.5} separator = ","/>
      </Typography>
    </CardContent>

    </Grid>


    </Grid>
      
    </div>
  )
}

export default Cards;

