import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { signUp } from "../../utilities/auth-services";
import { setUserToken } from "../../utilities/auth-token";
import { UserContext } from "../../data"

const RegisterForm = () => {

    const initialState = {
        username: "",
        password: ""
    }
    const [input, setInput] = useState(initialState)
    const setUser = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const createdUser = await signUp(input)
        console.log("Created User: ", createdUser)

        if(createdUser.token) {
            navigate("/")
            setUserToken(createdUser.token)
            setUser(createdUser.user)
        } else {
            navigate("/auth")
        }
        setInput(initialState)
    }

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input 
                    id="username"
                    name="username"
                    value={input.username}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label htmlFor="password">Password: </label>
                <input 
                    id="password"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                />
                <br />
                <br />
                <button 
                    type="submit"
                    value="Sign Up"
                >Sign Up!</button>
            </form>
        </>
    )
}

export default RegisterForm