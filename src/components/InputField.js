import React from 'react';
import '../styles/InputField.css'
import warningIcon from '../assets/icons/red-alert-icon.svg';
import { useState } from 'react';

const InputField = React.forwardRef((props, ref) => {
  const { id, label, type, name, value, onChange, error, children, hint } = props;
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
  return (
    <div className="inputAndError">
      <label className="inputLabel" htmlFor={name}>{label}</label>
      {hint && <span id="password-hint">{hint}</span>}
      {error && (
        <span className="error" id={`${name}-error`} aria-describedby={hint && "password-hint"}>
          <img src={warningIcon} alt="Error" className="warningIcon" />
          {error}
        </span>
      )}
      <div className={children && isInputFocused ? "inputAndChildren" : "inputAndChildrenLeft"}>
        <input
          id={id}
          ref={ref}
          className="inputField"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : undefined}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {children}
      </div>
    </div>
  );
});

export default InputField;