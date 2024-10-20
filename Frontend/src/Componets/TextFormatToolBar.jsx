import React, { useState } from 'react';
import { FaBold, FaItalic, FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa';

export const TextFormatToolBar = ({ excalidrawAPI }) => {
    const [fontSize, setFontSize] = useState(16);
    const [fontFamily, setFontFamily] = useState('Arial');
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);

    const handleFontSizeChange = (e) => {
        const size = parseInt(e.target.value, 10);
        setFontSize(size);
        excalidrawAPI.setAppState({ 
            selectedTextElement: {
                ...excalidrawAPI.getAppState().selectedTextElement,
                fontSize: size,
            },
        });
    };

    const handleFontFamilyChange = (e) => {
        const family = e.target.value;
        setFontFamily(family);
        excalidrawAPI.setAppState({ 
            selectedTextElement: {
                ...excalidrawAPI.getAppState().selectedTextElement,
                fontFamily: family,
            },
        });
    };

    const toggleBold = () => {
        setIsBold((prev) => !prev);
        excalidrawAPI.setAppState({ 
            selectedTextElement: {
                ...excalidrawAPI.getAppState().selectedTextElement,
                fontWeight: isBold ? 'normal' : 'bold',
            },
        });
    };

    const toggleItalic = () => {
        setIsItalic((prev) => !prev);
        excalidrawAPI.setAppState({ 
            selectedTextElement: {
                ...excalidrawAPI.getAppState().selectedTextElement,
                fontStyle: isItalic ? 'normal' : 'italic',
            },
        });
    };

    const handleTextAlignment = (alignment) => {
        excalidrawAPI.setAppState({ 
            selectedTextElement: {
                ...excalidrawAPI.getAppState().selectedTextElement,
                textAlign: alignment,
            },
        });
    };

    return (
        <div className="formatting-toolbar" style={{backgroundColor: '#27292C', padding: '8px', height: 'min-content', display: 'flex', flexDirection: 'column', marginTop: '16px', color: '#fff'}}>
            <select value={fontSize} onChange={handleFontSizeChange}>
                <option value={12}>12</option>
                <option value={14}>14</option>
                <option value={16}>16</option>
                <option value={18}>18</option>
                <option value={20}>20</option>
                <option value={24}>24</option>
                <option value={30}>30</option>
                <option value={36}>36</option>
                <option value={48}>48</option>
            </select>
            <select value={fontFamily} onChange={handleFontFamilyChange}>
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier New</option>
                <option value="Georgia">Georgia</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
            </select>
            <button onClick={toggleBold} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <FaBold />
            </button>
            <button onClick={toggleItalic} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <FaItalic />
            </button>
            <button onClick={() => handleTextAlignment('left')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <FaAlignLeft />
            </button>
            <button onClick={() => handleTextAlignment('center')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <FaAlignCenter />
            </button>
            <button onClick={() => handleTextAlignment('right')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <FaAlignRight />
            </button>
        </div>
    );
};

export default TextFormatToolBar;
