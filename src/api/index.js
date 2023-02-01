import axios from "axios";

const url =  "https://disease.sh/v3/covid-19/all";
const url3 =  "https://disease.sh/v3/covid-19";

export const fetchData =async (country)=>{
    console.log(country)
    let changeableurl = url

    if(country){
        changeableurl = `${url3}/countries/${country}`
    }
    try{
        const {data: {cases, deaths, recovered, critical}} = await axios.get(changeableurl);
        
        return {cases, deaths, recovered, critical};

    } catch(error){
        console.log("error")

    }

}


const url1 = "https://disease.sh/v3/covid-19/historical/all?lastdays=all"

export const fetchDailyData =async ()=>{
    try{
        //const {data: {cases, deaths, recovered, critical}} = await axios.get(url1);
        const {data: {cases, deaths, recovered}} = await axios.get(url1);
        return {cases, deaths, recovered};
    

    } catch(error){

    }

}


const url2 = "https://disease.sh/v3/covid-19/vaccine/coverage/countries"
export const Countries = async() => { 
    try{
        const response = await axios.get(url2)
        //console.log(response)
        return (response.data);
    
    }catch(error){
        console.log("error")

    }
}