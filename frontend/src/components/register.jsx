import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./css/register.module.css";

function Register() {

    const [register, setRegister] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setRegister(prevRegister => {
            return {
                ...prevRegister,
                [name]: value
            }
        })
    }

    const submitData = async () => {
        const response = await axios
            .post(`http://localhost:5000/user/`, register)
            .catch(err => console.log("Error: ", err))
        alert(response.data)
    }

    function handleSubmit(e) {
        e.preventDefault();
        submitData()
        setRegister({
            firstname: "",
            lastname: "",
            email: "",
            password: ""
        })
    }

    return (
        <React.Fragment>
            <div className={styles.registerForm}>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="firstname" value={register.firstname} placeholder="First Name" onChange={handleChange} />
                    <input type="text" name="lastname" value={register.lastname} placeholder="Last Name" onChange={handleChange} />
                    <input type="email" name="email" value={register.email} placeholder="Email" onChange={handleChange} />
                    <input type="password" name="password" value={register.password} placeholder="Password" onChange={handleChange} />
                    <button type="submit" onClick={handleSubmit}>
                        Sign up
                    </button>
                </form>
                <Link to={"/"} style={
                    {
                        textDecoration: "none",
                        color: "#2196f3"
                    }
                }
                >Create an account
                    <button style={{ margin:"2%",background: "#2196f3" }} type="submit">
                        Sign up
                    </button>
                </Link>
            </div>
            {/* <Link to={"/"} style={{ textDecoration: "none" }}>
                                <div className={styles.goSignin}>
                                    <p>
                                        Already Registered?
                                    </p>
                                <button style={
                                        {
                                             background: "#2196f3",
                                             color:"white",
                                             fontSize: "1.3em",
                                             fontWeight: "400", 
                                             outline: "none",
                                             border: "none",
                                             padding: "5px 15px",
                                        }
                                             } type="submit">
                                        Sign up
                                    </button>
                                </div>
                            </Link> */}
        </React.Fragment >
    )
}

export default Register
