import React, { useState, forwardRef } from 'react';
import InputField from './InputField';
import '../styles/PasswordField.css';

const PasswordField = forwardRef(({ id, label, name, value, onChange, error, hint }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="passwordInputContainer">
            <InputField
                id={id}
                label={label}
                type={isPasswordVisible ? 'text' : 'password'}
                name={name}
                value={value}
                onChange={onChange}
                error={error}
                ref={ref}
                hint={hint}
            >
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="togglePasswordVisibility"
                    aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                >
                    {isPasswordVisible ? 'Hide' : 'Show'}
                </button>
            </InputField>
        </div>
    );
});

export default PasswordField;
