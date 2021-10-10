import React, { useState } from "react";
import "./form.css"

const Form = () => {
    const [txt , setTxt] = useState("");
    const [items, setItems] = useState([]);
    
    const updatetxt = (e) =>{
        setTxt(e.target.value)
    }

    const cleartxt = (index) => {
        setTxt("")
        setItems([])
    }

    const addItems = () => {
        if(!txt){
            alert("FIELD CAN NOT BE EMPTY")
        }else {
            setItems([...items, txt]);
            setTxt("")
        } 
    }

    const delItems = (id) => {
      const updatedItems = items.filter((e,index) => {
            return index !== id;
        })
        setItems(updatedItems)
    }

    return (
        <div>
            <div className="appBody">
                    <h1 className="Header">My to-do list app</h1>
                    <div>
                        <input className="bar" type="text" value={txt} onChange={updatetxt}/>
                    </div>
                    <div className="btns">
                        <button className="btn" onClick={addItems}>Add</button>
                        <button className="btn" onClick={cleartxt}>Clear</button>
                    </div>
                    {items.map((srt, index) => {
                    return (
                    <div>
                        <h2 key={index}>{srt} <button className="btn2" onClick={() => delItems(index)}>Delete</button></h2>
                    </div> 
                    )
                    })}
            </div>
        </div>
    )
}

export default Form