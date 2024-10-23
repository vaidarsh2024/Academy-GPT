import { FaSquareFull } from "react-icons/fa";
import rectangleColorPatch from '../assets/Image/colorrectangle.svg';
import './ColorToolBar.css';

export const ColorToolBar = ({onChangeBackground}) => {
    return <>
        <div className="color-toolbar">
        <FaSquareFull 
                onClick={() => onChangeBackground("#ffffff")} 
                style={{ color: "#ffffff", background: '#ffffff', border: "1px solid #fff", cursor: "pointer", fontSize: "32px", padding: '10px', borderRadius: '5px' }} 
                title="White Background"
            />
            
            {/* Black Color Icon */}
            <FaSquareFull 
                onClick={() => onChangeBackground("#000000")} 
                style={{ color: "#000000", background: '#000000', border: "1px solid #fff", cursor: "pointer", fontSize: "32px", marginTop: "10px", padding: '10px', borderRadius: '5px' }} 
                title="Black Background"
            />


            {/* Grid Icon */}
            <img src={rectangleColorPatch} onClick={() => onChangeBackground("grid")}
                style={{ 
                    marginTop: "10px", 
                    borderRadius: '5px'
                }} 
                title="Grid Background"/>
        </div>
    </>
}