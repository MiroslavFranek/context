import React from "react";
import "./ColorSchemaChanger.css"

const ColorSchemaChanger = ({setColorSchema}) => {
    
    return (
        <div className="selectBlock">
            <select onChange={({target})=>setColorSchema(target.value)}>
                <option value="midnightblue">Blue</option>
                <option value="mediumorchid">Purple</option>
                <option value="navy">More Blue</option>
                <option value="indigo">More Purple</option>
            </select>
        </div>
    )
}
export default ColorSchemaChanger;
