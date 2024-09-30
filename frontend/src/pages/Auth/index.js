import './Auth.css'

import RegisterForm from '../../components/Auth/RegisterForm'
import LoginForm from '../../components/Auth/LoginForm'

export default function Auth() {

    return (
        <section className='auth-container'>
            <RegisterForm />
            <LoginForm />
        </section>
    )
}