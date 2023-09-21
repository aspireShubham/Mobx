import React from 'react'
import  RootStore  from "../store/RootStore"
import { useStore } from "../Hooks/useStore"
import { observer } from "mobx-react-lite"


export const Count = observer(()=> {
    const {rootStore : {countStore} } = useStore()

    const Increment = ()  => {
        countStore.increment()
    }

    const Decrement = ()  => {
        countStore.decrement()
    }

    return (
        <div>
           <p>count : {countStore.getCountValue} </p> 
               
               <button onClick={Increment}> + </button>
               <button onClick={Decrement}> - </button>
        </div>   
    )
})