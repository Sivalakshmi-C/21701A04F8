import React,{useState} from 'react';
import axios from 'axios';
const Random=()=> {
    const[data,setData]=useState([]);
    const fetchRandomNumbers=async()=>{
        try {
            const response =await axios.get('http://20.244.56.144/test/rand');
            setData(response.data.numbers);
        }
        catch(error){
            console.error('Error fetching random numbers:',error);
        }
    };
    return(
        <div>
            <button onClick={fetchRandomNumbers}>Get Random Numbers</button>
            <ul>
                {data.map((number,index)=>(<li key={index}>{number}</li>))}
            </ul>
        </div>
    );
};
export default Random;