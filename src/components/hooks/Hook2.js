import React,{useState} from 'react'
export default function ButtonHook(){
    const [buttonText, setButonText]=useState("Click me, please")
    function handleClick(){
        return setButonText("Thanks, been clicked... happy days")
    }
    return <button onClick={handleClick}>{buttonText}</button>
}