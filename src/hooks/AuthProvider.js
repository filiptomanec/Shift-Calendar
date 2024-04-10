import {useContext, createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const navigate = useNavigate();
    const loginAction = async (data, setIsLoading) => {
        try {
            const response = await fetch("http://localhost:3004/auth/authenticate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const res = await response.json();
            console.log(res);
            if (res) {
                setUser(res.username);
                setToken(res.accessToken);
                localStorage.setItem("site", res.accessToken);
                setIsLoading(false);
                navigate("/dashboard");
                return;
            }
            throw new Error(res.message);
        } catch (err) {
            setIsLoading(false);
            console.error(err);
        }
    };

    const logOut = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("site");
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{token, user, loginAction, logOut}}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};