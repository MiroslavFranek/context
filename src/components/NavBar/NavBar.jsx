import { useContext } from "react";
import { ThemeContext } from "../../App";
import "./NavBar.css"


const NavBar = () => {
    const colorSchema = useContext(ThemeContext)
    const themeStyle ={backgroundColor: colorSchema}
    return (
        <>
            <nav style={themeStyle}>
                
            </nav>
        </>
    )
}
export default NavBar;
