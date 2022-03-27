import React, { useState } from "react";
import "./AppSign.css";

function App() {
    const [signupData, setSignupData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: false
    });

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setSignupData(prevSignupData => {
            return {
                ...prevSignupData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (signupData.password === signupData.confirmPassword) {
            console.log("Successfully signed up");
        } else {
            console.log("Passwords do not match");
            return
        }
        if (signupData.newsletter === true) {
            console.log("Thanks for signing up for our newsletter!");
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={signupData.email}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={signupData.password}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    value={signupData.confirmPassword}
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="newsletter"
                        checked={signupData.newsletter}
                        onChange={handleChange}
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button className="form--submit">Sign up</button>
            </form>
        </div>
    )
}

export default App;