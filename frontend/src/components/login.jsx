import React, { useEffect, useState } from 'react'
import Home from "./homepage";
import { Link } from 'react-router-dom'
import axios from "axios";
import { setUser } from '../redux/actions/reduxAction';
import { useDispatch } from 'react-redux';
import styles from "./css/login.module.css";

let authCheck;

function Login() {
    // const users = useSelector(state => state)
    const dispatch = useDispatch()

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const [check, setCheck] = useState(false);//check user has signed in or not
    const [userData, setUserData] = useState();

    function handleChange(e) {
        const { name, value } = e.target;
        setLogin(prevState => {
            return { ...prevState, [name]: value }
        })
    }


    const fetchUser = async () => {
        const response = await axios
            .post(`http://localhost:5000/user/${login.email}`)
            .catch(err => console.log("Error:", err));
        authCheck = response.data[0].Password
        if (response) {
            if (authCheck === login.password) {
                dispatch(setUser(response.data))
                setUserData(response.data)
                setCheck(true)
            }
            else {
                alert("Password incorrect")
            }
        }
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (login.email === "" & login.password === "") {
            alert("please fill up all required fields")
        } else {
            fetchUser()
            setLogin({
                email: "",
                password: ""
            })
        }
    }

    //loads the saved data from the localstorage
    useEffect(() => {
        const savedUserData = localStorage.getItem("userInfo")
        setUserData(JSON.parse(savedUserData))
        const checkData = localStorage.getItem("check");
        const storedCheck = JSON.parse(checkData)
        setCheck(storedCheck);
        // eslint-disable-next-line
    }, [])
    //save the data at localstorage
    useEffect(() => {
        // localStorage.setItem('state', JSON.stringify(users))
        localStorage.setItem('userInfo', JSON.stringify(userData))
        localStorage.setItem('check', JSON.stringify(check))
        // eslint-disable-next-line
    })


    return (
        <React.Fragment>
            {
                (check === true) ? <Home userData={userData} /> : (
                    <React.Fragment>
                        <div className={styles.loginForm}>
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="email" value={login.email} placeholder="Email" onChange={handleChange} required />
                                <input type="text" name="password" value={login.password} placeholder="Password" onChange={handleChange} required />
                                <button type="submit" onClick={handleSubmit}>
                                    Sign in
                                </button>
                            </form>
                            <Link to={"/register"} style={
                                {
                                     textDecoration: "none",
                                     color:"#4caf50" 
                                }
                                }
                            >
                                Already Registered?
                                <button style={{margin:"2%",background:"#4caf50"}} type="submit">
                                        Sign up
                                    </button>
                            </Link>
                        </div>
                    </React.Fragment>
                )
            }
        </React.Fragment>
    )
}

export default Login
