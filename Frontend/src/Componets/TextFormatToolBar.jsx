import React, { useState } from 'react';
import { FaBold, FaItalic, FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from 'react-icons/fa';
import { MdFormatSize } from 'react-icons/md';
import './TextFormatToolBar.css'; // Add your custom CSS
import bold from '../assets/Image/bold.svg';
import frame from '../assets/Image/frame.svg';
import italic from '../assets/Image/italic.svg';
import link from '../assets/Image/link.svg';

export const TextFormatToolBar = ({ onBold, onItalic, onFontSizeChange, onAlign }) => {
  return (
    <div className="toolbar">
      <button onClick={onFontSizeChange} style={{marginTop: '20px'}}>
        <img src={link} />
      </button>
      <button onClick={onAlign} style={{marginTop: '20px'}}>
        <img src={frame} />
      </button>
      <button onClick={onItalic} style={{marginTop: '20px'}}>
        <img src={italic} />
      </button>
      <button onClick={onBold} style={{marginTop: '20px', marginBottom: '20px'}}>
        <img src={bold} />
      </button>
      {/* <button onClick={() => onFontSizeChange('large')} title="Large Font">
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
      </button> */}
    </div>
  );
};

export default TextFormatToolBar;
