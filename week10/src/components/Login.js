import React from "react";
import {useState} from "react"; 
import { loginUser } from "../utilities";

const Login = () =>{
    const [username, SetUsername] = useState()
    const [password, SetPassword] = useState()

    const submitHandler = async (event) =>{
        event.preventDefault()
        console.log(username)
        console.log(password)
        loginUser(username, password)

    }

    return (
        <div className="login">
            <h2>Please Login below</h2>

            <form onSubmit={submitHandler}>
                <label>Username:
                    <input onChange={(event) => SetUsername(event.target.value)}></input>
                </label>

                <br></br>

                <label>Password:
                    <input onChange={(event)=> SetPassword(event.target.value)}></input>
                </label>

                <br></br>

                <button type="submit">Click here to log in</button>
            </form>


        </div>

    )

}

export default Login