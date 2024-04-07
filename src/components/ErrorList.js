import React from 'react';
import '../styles/ErrorList.css';

const ErrorList = React.forwardRef((props, ref) => {
    const { errors } = props;
    const handleClick = (fieldRef) => {
        if (fieldRef && fieldRef.current) {
            fieldRef.current.focus();
        }
    };

    return (
        <div>
            {errors.length > 0 && (
                <div className="errorSummary" role="group" tabIndex="-1" aria-labelledby="errorSummary-heading" ref={ref}>
                    <h2 id="errorSummary-heading">There's a problem</h2>
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index} style={{ cursor: 'pointer' }} tabIndex={-1} onClick={(e) => {
                                e.preventDefault();
                                handleClick(error.fieldRef)
                                const element = document.getElementById(error.id);
                                if (element) {
                                    element.focus();
                                }
                            }}>
                                <a className="errorItem" href={`#${error.id}`}>{error.message}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});

export default ErrorList;
