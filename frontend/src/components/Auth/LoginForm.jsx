import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { signIn } from "../../utilities/auth-services";
import { setUserToken } from "../../utilities/auth-token";
import { UserContext } from "../../data"

const LoginForm = () => {

    const initialState = {
        username: "",
        password: ""
    }
    const [input, setInput] = useState(initialState)
    const setUser = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const loggingUser = await signIn(input)
        console.log("Logging User: ", loggingUser)

        if(loggingUser.token) {
            setUser(loggingUser.user)
            setUserToken(loggingUser.token)
            navigate("/")
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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Name: </label>
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
                    value="Sign In"
                >Sign In!</button>
            </form>
        </>
    )
}

export default LoginForm