import {useNavigate} from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <div>
                <h1>Welcome to the Shift Calendar app!</h1>
                <button onClick={() => navigate("/login")} className="btn-submit">
                    Log In
                </button>
            </div>
        </div>
    );
};

export default Welcome;