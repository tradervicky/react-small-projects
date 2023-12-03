import React from 'react';
import './InputBox.css';

function InputBox({ textLabel, paddingInput, widthInput,placeHolder, onChange  }) {
  const styleInput = {
    padding: paddingInput || '5px 10px',
    border: '0.5px solid gray',
    fontSize: '16px',
    fontWeight: '500',
    width: widthInput || '100%',
    borderRadius: '8px',
  };
  const handleChange = (event) => {
    
    onChange && onChange(event.target.value);
  };
  return (
    <div className='InputBoxMain'>
      <div className='InputBoxLabel'>
        <label htmlFor=''>{textLabel} : </label>
      </div>
      <div className='InputTextbox'>
        <input type='text' style={styleInput} 
        placeholder={placeHolder}
        onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default InputBox;
