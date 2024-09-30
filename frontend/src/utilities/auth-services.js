import * as authAPI from './auth-api'

export async function signUp(data){
    try {

        const newUser = await authAPI.registerUser(data)
        return newUser

    }catch(error){

        console.log(error)
        return error
    }
}

export async function signIn(data){
    try {

        const user = await authAPI.loginUser(data)
        return user

    }catch(error){
        
        console.log(error)
        return error
    }
}