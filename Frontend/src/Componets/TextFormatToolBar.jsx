import React, { useState } from 'react';
import { FaBold, FaItalic, FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from 'react-icons/fa';
import { MdFormatSize } from 'react-icons/md';
import './TextFormatToolBar.css'; // Add your custom CSS

export const TextFormatToolBar = ({ onBold, onItalic, onFontSizeChange, onAlign }) => {
  return (
    <div className="toolbar" style={{backgroundColor: '#27292C', padding: '8px', height: 'min-content', display: 'flex', flexDirection: 'column', marginTop: '16px', color: '#fff', border: '1px solid #ccc'}}>
      <button onClick={onBold} title="Bold">
        <FaBold />
      </button>
      <button onClick={onItalic} title="Italic">
        <FaItalic />
      </button>
      <button onClick={() => onFontSizeChange('small')} title="Small Font">
        <MdFormatSize />
      </button>
      <button onClick={() => onFontSizeChange('medium')} title="Medium Font">
        <MdFormatSize />
      </button>
      <button onClick={() => onFontSizeChange('large')} title="Large Font">
        <MdFormatSize />
      </button>
      <button onClick={() => onAlign('left')} title="Align Left">
        <FaAlignLeft />
      </button>
      <button onClick={() => onAlign('center')} title="Align Center">
        <FaAlignCenter />
      </button>
      <button onClick={() => onAlign('right')} title="Align Right">
        <FaAlignRight />
      </button>
      <button onClick={() => onAlign('justify')} title="Justify">
        <FaAlignJustify />
      </button>
    </div>
  );
};

export default TextFormatToolBar;
