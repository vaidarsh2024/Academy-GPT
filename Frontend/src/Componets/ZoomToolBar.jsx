import { FaMinus, FaPlus } from "react-icons/fa";

export const ZoomToolBar = ({ onZoomIn, onZoomOut, zoomLevel }) => {
    return <div className="zoom-toolbar" style={{backgroundColor: '#27292C', color: '#fff', padding: '12px', height: 'min-content', display: 'flex', flexDirection: 'column', marginTop: '16px', alignItems: 'center', justifyContent: 'space-between'}}>
                <FaMinus 
                    onClick={onZoomOut} 
                    style={zoomToolStyles.icon} 
                    title="Zoom Out" 
                />
                <span style={zoomToolStyles.zoomLevel}>{zoomLevel}%</span>
                <FaPlus 
                    onClick={onZoomIn} 
                    style={zoomToolStyles.icon} 
                    title="Zoom In" 
                />
        </div>;
}

const zoomToolStyles = {
    icon: {
        cursor: 'pointer',
        fontSize: '24px',
        margin: '4px 10px',
    },
    zoomLevel: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
};