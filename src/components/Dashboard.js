import {useAuth} from "../hooks/AuthProvider";
import "../styles/main.css"

const Dashboard = () => {
    const auth = useAuth();
    return (
        <div className="container">
            <h1>Welcome {auth.user}!</h1>
            <button onClick={() => auth.logOut()} className="btn-submit">
                logout
            </button>
        </div>
    );
};

export default Dashboard;