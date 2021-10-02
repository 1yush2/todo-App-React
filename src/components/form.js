import React, { useState } from "react";

const Form = () => {
    const [txt , setTxt] = useState("");
    const [items, setItems] = useState([]);
    
    const updatetxt = (e) =>{
        setTxt(e.target.value)
    }

    const cleartxt = () => {
        setTxt("")
    }

    const addItems = () => {
        if(!txt){
            alert("FIELD CAN NOT BE EMPTY")
        }else {
            setItems([...items, txt]);
            setTxt("")
        } 
    }

    return (
        <div>
            <form>
                <input type="text" value={txt} onChange={updatetxt}/>
                <button onClick={addItems}>Add</button>
                <button onClick={cleartxt}>Clear</button>
            </form>
            {items.map((look, ind)=>{
                return (
                    <h3>{look}</h3>
                )
            })}
        </div>
    )
}

export default Form