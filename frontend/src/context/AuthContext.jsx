import React, { useState, useEffect, useContext, useMemo } from 'react';
import getAuth from '../utils/auth';

const AuthContext = React.createContext();

const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [employee, setEmployee] = useState(null);
    const [admin, setIsAdmin] = useState(false);

    useEffect(() => {
        getAuth().then((response) => {
            if (response.employee_token) {
                setIsLogged(true);
                if (response.employee_role === 3) {
                    setIsAdmin(true);
                }
                setEmployee(response);
            }
        }).catch(error => {
            console.error("Failed to fetch authentication status:", error);
            // Handle error state appropriately
        });
    }, []);

    const values = useMemo(() => ({ isLogged, admin, setIsLogged, setIsAdmin, employee }), [isLogged, admin, employee]);


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default useAuth;
