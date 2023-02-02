import React from 'react'
import { useState, useEffect } from 'react';
import { FormControl } from '@mui/material';
// import styles from './CountryPicker.module.css';
import {Countries} from  '../../api'
import NativeSelect from '@mui/material/NativeSelect';




const  CountryPicker=({handleCountryChange}) =>{
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(()=>{
    const fetchCountries = async()=>{
      setFetchedCountries(await Countries())

    }
    fetchCountries()
  },[setFetchedCountries]);

  //console.log(fetchedCountries);



  
  return (
    <div>
    <FormControl className='styles.formControl'>
    <NativeSelect defaultValue = "" onChange={(e)=>handleCountryChange(e.target.value) }>
    {fetchedCountries[0]===null || fetchedCountries[0]==="" || fetchedCountries[0]===undefined? "-":  fetchedCountries.map((country, i)=><option  key = {i} value = {country}>{country.country}</option>)}

    </NativeSelect>
    </FormControl>
    </div>
  )
}

export default CountryPicker;