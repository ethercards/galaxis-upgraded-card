import React from 'react'
import { useEffect, useState } from "react";
import './CounterBar.css';

const CounterBar = (props) => {
    const ITEM_COUNT = 10;
    const [items,setItems] = useState([]);
    const [currentValue,setCurrentValue] = useState(null);
    const [maxValue,setMaxValue] = useState(null);
    const [progress,setProgress] = useState(null);


    useEffect(()=>{
        let a = [];

        for(let i=0;i<ITEM_COUNT;i++){a.push(i)}

        setItems(a);
    },[]);

    useEffect(()=>{
        //console.log('COUNTER',props.value,props.maxValue);
        if(props.value!== null && props.value!== undefined && props.value!== currentValue){
            setCurrentValue(props.value);
        }

        if(props.maxValue && props.maxValue!== maxValue){
            setMaxValue(props.maxValue);
        }

    },[props]);

    useEffect(()=>{
        if(maxValue && maxValue>0){
            let p = Math.floor((currentValue/maxValue)*ITEM_COUNT);
            if(p===0 && currentValue>0){
                p=1;
            }
            setProgress(p);
            //console.log(currentValue,p);
        }
        

    },[currentValue,maxValue]);



    return(
    <>
        {items.length>0 && 
            <div className="counter-body">
                {items.map((e,i)=>{
                    return (
                        <span className={`counter-item ${i<progress?'active':''}`} key={'c'+i}></span>
                    )
                })
                }
            </div>
        }
    </>
    );
}

export default CounterBar;