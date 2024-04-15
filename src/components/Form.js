import React, { useState, useRef, useEffect } from 'react';
import InputField from './InputField';
import ErrorList from './ErrorList';
import PasswordField from './PasswordField';
import '../styles/Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        document.title = 'Registration form';
    }, []);

    const [errors, setErrors] = useState([]);
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const errorSummaryRef = useRef();

    useEffect(() => {
        const originalTitle = document.title;
        if (errors.length > 0) {
            document.title = `${errors.length} error(s) - ${originalTitle}`;
            if (errorSummaryRef.current) {
                errorSummaryRef.current.focus();
            }
        } else {
            document.title = originalTitle;
        }
        return () => {
            document.title = originalTitle;
        };
    }, [errors]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = [];
        if (!formData.username.trim()) {
            newErrors.push({ id: "username", message: 'Enter your username', fieldRef: usernameRef });
        }
        if (!formData.email) {
            newErrors.push({ id: "email", message: 'Enter your email', fieldRef: emailRef });
        }
        else if (!formData.email.includes('@')) {
            newErrors.push({ id: "email", message: 'You need to enter the ‘at’ symbol in the email address', fieldRef: emailRef });
        }
        if (formData.password.length < 12) {
            newErrors.push({ id: "password", message: 'Your password must contain at least 12 characters', fieldRef: passwordRef });
        }
        setErrors(newErrors);

        if (newErrors.length === 0) {
            console.log('Form data:', formData);
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            alert('You have successfully registered');
        }
    };

    return (
        <form className='form' noValidate onSubmit={handleSubmit} aria-labelledby="formTitle">
            <ErrorList errors={errors} ref={errorSummaryRef} />
            <div className='inputFieldsWithTitle'>
                <h1 id="formTitle">Register</h1>
                <div className='inputFields'>
                    <InputField
                        id="username"
                        ref={usernameRef}
                        label="Username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        error={errors.find(error => error.id === "username")?.message}
                    />

                    <InputField
                        id="email"
                        ref={emailRef}
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.find(error => error.id === "email")?.message}
                    />

                    <PasswordField
                        id="password"
                        ref={passwordRef}
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        hint={"Must contain at least 12 characters"}
                        error={errors.find(error => error.id === "password")?.message}
                    />

                    <button type="submit" className='submitButton'>Register</button>
                </div>
            </div>



        </form>
    );
};

export default Form;
