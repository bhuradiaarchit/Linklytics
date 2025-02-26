import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const ContextProvider = ({ children }) => {
    const getToken = localStorage.getItem("JWT_TOKEN") || null;

    const [token, setToken] = useState(getToken);

    const sendData = {
        token,
        setToken,
    };

    return <authContext.Provider value={sendData}>{children}</authContext.Provider>
};

export {authContext};



export const useAuthContext = () => {
    const context = useContext(authContext);
    return context;
}