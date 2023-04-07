import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./Block.css"

const Block = () => {
    const colorSchema = useContext(ThemeContext)
    const themeStyle = { backgroundColor: colorSchema }
    return (
        <div className="block">
            <div className="filler" style={themeStyle}>
                <div></div>
            </div>
        </div>
    )
}
export default Block;
