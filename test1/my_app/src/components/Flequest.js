import React,{useState} from 'react';
import axios from 'axios';
const Flequest=()=> {
    const[data,setData]=useState([]);
    const fetchFlequestData=async()=>{
        try {
            const response =await axios.get('http://20.244.56.144/test/flequest');
            setData(response.data);
        }
        catch(error){
            console.error('Error fetching flequest data:',error);
        }
    };
    return(
        <div>
            <button onClick={fetchFlequestData}>Get Flequest Data</button>
            <ul>
                {data.map((item,index)=>(<li key={index}>{item}</li>))}
            </ul>
        </div>
    );
};
export default Flequest;