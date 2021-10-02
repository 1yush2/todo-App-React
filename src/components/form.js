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

    const itemsList = () => {
        setItems((prevItems) => {
            return [...prevItems, txt]
        })
        setTxt("")
    }

    return (
        <div>
            <form>
                <input type="text" value={txt} onChange={updatetxt}/>
                <button onClick={itemsList}>Add</button>
                <button onClick={cleartxt}>Clear</button>
            </form>
            {items.map((look)=>{
                return <p key={look}>{look}</p>
            })}
        </div>
    )
}

export default Form