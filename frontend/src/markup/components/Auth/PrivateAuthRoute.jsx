import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import getAuth from '../../../utils/auth';

const PrivateAuthRoute = ({ roles, children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const loggedInEmployee = getAuth();
        loggedInEmployee.then((response) => {
            if (response.employee_token) {
                setIsLogged(true);
                if (roles && roles.length > 0 && roles.includes(response.employee_role)) {
                    setIsAuthorized(true);
                }
            }
            setIsChecked(true);
        });
    }, [roles]);
    return children; // This line ensures that authorized children components are rendered
};

export default PrivateAuthRoute;
