import { FaSquareFull } from "react-icons/fa";

export const ColorToolBar = ({onChangeBackground}) => {
    return <>
        <div style={{backgroundColor: '#27292C', padding: '8px', height: 'min-content', display: 'flex', flexDirection: 'column', marginTop: '16px'}}>
        <FaSquareFull 
                onClick={() => onChangeBackground("#ffffff")} 
                style={{ color: "#ffffff", background: '#ffffff', border: "1px solid #fff", cursor: "pointer", fontSize: "42px", padding: '15px', borderRadius: '5px' }} 
                title="White Background"
            />
            
            {/* Black Color Icon */}
            <FaSquareFull 
                onClick={() => onChangeBackground("#000000")} 
                style={{ color: "#000000", background: '#000000', border: "1px solid #fff", cursor: "pointer", fontSize: "42px", marginTop: "10px", padding: '15px', borderRadius: '5px' }} 
                title="Black Background"
            />

            {/* Red Color Icon */}
            <FaSquareFull 
                onClick={() => onChangeBackground("#ff0000")} 
                style={{ color: "#ff0000", background: '#ff0000', border: "1px solid #fff", cursor: "pointer", fontSize: "42px", marginTop: "10px", padding: '15px', borderRadius: '5px' }} 
                title="Black Background"
            />

            {/* Yellow Color Icon */}
            <FaSquareFull 
                onClick={() => onChangeBackground("#FFFF00")} 
                style={{ color: "#FFFF00", background: '#FFFF00', border: "1px solid #fff", cursor: "pointer", fontSize: "42px", marginTop: "10px", padding: '15px', borderRadius: '5px' }} 
                title="Black Background"
            />

            {/* Grid Icon */}
            <FaSquareFull 
                onClick={() => onChangeBackground("grid")}
                style={{ 
                    color: "#555",  // Set the color to gray or any other indicator for the grid mode
                    background: "repeating-linear-gradient(45deg, #ccc, #ccc 10px, #eee 10px, #eee 20px)", // Represents a grid pattern
                    border: "1px solid #fff", 
                    cursor: "pointer", 
                    fontSize: "42px", 
                    marginTop: "10px", 
                    padding: '15px',
                    borderRadius: '5px'
                }} 
                title="Grid Background"
            />
        </div>
    </>
}