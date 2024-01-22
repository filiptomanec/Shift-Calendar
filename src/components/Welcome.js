import {useNavigate} from "react-router-dom";
import "../styles/main.css"

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <h1>Welcome to the Shift Calendar app!</h1>
            <button onClick={() => navigate("/login")} className="btn-submit">
                Log In
            </button>
        </div>
    );
};

export default Welcome;