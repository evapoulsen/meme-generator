import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName:"",
        email:"",
        comments:"",
        isFriendly: true,
        employment: "",
        favColor: ""
    });

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
    }

    const favStyles = {
        color: formData.favColor,
        fontWeight: "bolder"
    }

    return (
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                    className="form-control"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                    className="form-control"
                />
                <input
                    type="email"
                    placeholder="E-Mail Address"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                    className="form-control"
                />
                <br />
                    <textarea 
                    value={formData.comments}
                    placeholder="Comments"
                    onChange={handleChange}
                    name="comments"
                    cols="100"
                    className="form-control"
                />
                <br />
                <input 
                    type="checkbox" 
                    id="isFriendly"
                    name= "isFriendly" 
                    checked={formData.isFriendly}
                    onChange={handleChange}
                />
                <label htmlFor="isFriendly">&nbsp;Are you friendly?</label>
                <br />
                </div>
                <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">&nbsp;Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">&nbsp;Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">&nbsp;Full-time</label>
                <br />   
            </fieldset>
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
                className="form-control"
            >
                <option value="">--- Choose ---</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
                <option value="grey">Grey</option>
            </select>
            <br />
            <br />
            <button className="btn btn-secondary">Submit</button> 
            </form>
            <br />
            <hr />
            <p>{formData.firstName} {formData.lastName}</p>
            <p>{formData.email}</p>
            <p>{formData.isFriendly === true ? "You are friendly" : "Come on! You can be friendly!"}</p>
            {formData.comments && <p>Your comments are: {formData.comments}</p>}
            {formData.employment && <p>Your employment status is: {formData.employment}</p>}
            {formData.favColor && <p>Your favourite color is: <span style={favStyles}> {formData.favColor}</span></p>}
        </main>
    )
}

export default Form;


