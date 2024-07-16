import React,{useState} from 'react';
import axios from 'axios';
const Even=()=> {
    const[data,setData]=useState([]);
    const fetchEvenNumbers=async()=>{
        try {
            const response =await axios.get('http://20.244.56.144/test/even');
            setData(response.data);
        }
        catch(error){
            console.error('Error fetching even numbers:',error);
        }
    };
    return(
        <div>
            <button onClick={fetchEvenNumbers}>Get Even Numbers</button>
            <ul>
                {data.map((number,index)=>(<li key={index}>{number}</li>))}
            </ul>
        </div>
    );
};
export default Even;