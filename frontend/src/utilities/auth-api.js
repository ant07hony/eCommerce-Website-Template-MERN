// NEED TO TEST AND VERIFY
// // NEED TO TEST AND VERIFY
// // // NEED TO TEST AND VERIFY
const authUrl = 'http://localhost:4000/auth'
console.log('auth url: ', authUrl)
// // // NEED TO TEST AND VERIFY
// // NEED TO TEST AND VERIFY
// NEED TO TEST AND VERIFY



// REGISTERING AN ACCOUNT
export async function registerUser(data){
    try {
        const url = `${authUrl}/register`
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch( url, options)

        if (response.ok){
            const parsedData = response.json()
            return parsedData
        } else {
            throw new Error(response.statusText)
        }

    }catch(error){
        console.log(error)
        return error
    }
}


// LOGIN USER
export async function loginUser(data){
    try{

        const url = `${authUrl}/login`
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch( url, options )

        if(response.ok){
            const parsedData = response.json()
            return parsedData
        }else{
            throw new Error(response.statusText)
        }

    }catch(error){
        console.log(error)
        return error
    }
}