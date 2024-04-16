import { useState, useContext } from "react";
import { userState } from "../containers/StoreContainer";
import { Link, Outlet, useNavigate } from "react-router-dom";
const Login = ({ users }) => {
    const [loggedName, setLoggedName] = useState("")
    const context = useContext(userState)
    const { setActiveUser } = context;
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const filteredUser = users.find((user) =>
            user.name.toLowerCase() === loggedName.toLowerCase(),     
        );

        if (!filteredUser) {
            alert("Please Sign Up")
            event.target.reset();
            return;
        } 

        if (filteredUser.email !== event.target.email.value.toLowerCase()) {
            alert("Incorrect login details");
            event.target.reset();
            return;
        }

        setActiveUser(filteredUser);
        event.target.reset();
        navigate("/home");
    }

    return (
        <>
            <div className="login">
            <div className="main-login">
            <h1>Welcome back! Please login</h1>
                <div className="wrapper">
                    <div className="wrap">
                        <form onSubmit={handleFormSubmit}>
                            
                            <div className="input-box">
                            <label htmlFor="login-name">Name:</label>
                            <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={loggedUsername}
                                    onInput={(e) => setLoggedUsername(e.target.value)}
                                    placeholder="Enter name.."
                                />
                            </div>
                            
                            <div className="input-box">
                            <label htmlFor="login-email">Email:</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter email.."
                                />
                            </div>
                            <div class="remember-forgot">
                                <label for="">
                                    <input type="checkbox" name="" id=""/> Remember Me</label>
                            </div>
                            <div class="register-link">
                                <p> Dont have an account? <Link to="/register" className="register">Register</Link></p>
                            </div>
                            
                            <input className="btn" type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
            
                <Outlet />
            </div>
        </>
    )
}

export default Login;