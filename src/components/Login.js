import {useState} from "react";
import {useAuth} from "../hooks/AuthProvider";
import "../styles/main.css";
import "../styles/form.css";
import LoadingSpinner from "./LoadingSpinner";


const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const auth = useAuth();
    const handleSubmitEvent = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (input.email !== "" && input.password !== "") {
            auth.loginAction(input, setIsLoading);
            return;
        }
        setIsLoading(false);
        alert("please provide a valid input");
    };

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmitEvent} className="form">
                <div className="form_control">
                    <label htmlFor="user-email">Email:</label>
                    <input
                        type="email"
                        id="user-email"
                        name="email"
                        placeholder="example@gmail.com"
                        aria-describedby="user-email"
                        aria-invalid="false"
                        onChange={handleInput}
                    />
                    <div id="user-email" className="sr-only">
                        Please enter a valid email. It must contain at least 6 characters.
                    </div>
                </div>
                <div className="form_control">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        aria-describedby="user-password"
                        aria-invalid="false"
                        onChange={handleInput}
                    />
                    <div id="user-password" className="sr-only">
                        your password should be more than 6 character
                    </div>
                </div>
                <button className="btn-submit" disabled={isLoading}>
                    {isLoading ?
                        <LoadingSpinner/>
                        :
                        "Submit"
                    }
                </button>
            </form>
        </div>
    );
};

export default Login;