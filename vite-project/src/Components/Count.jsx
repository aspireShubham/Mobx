import React from 'react'
import  {useStore}  from "../Hooks/useStore"
import { observer } from "mobx-react-lite"


export const Count = observer(()=> {
    const {rootStore :{countStore}} = useStore()

    const Increment = ()  => {
        countStore.increment()
        // rootStore.countStore.decrement()

    }

    const Decrement = ()  => {
     countStore.decrement()
    //  rootStore.countStore.decrement()

    }

    return (
        <div>
           <p>count : {countStore.getCountValue} </p> 
           {/* <p>Count : {rootStore.countStore.getCountValue}</p> */}
               
               <button onClick={Increment}> + </button>
               <button onClick={Decrement}> - </button>
        </div>   
    )
})