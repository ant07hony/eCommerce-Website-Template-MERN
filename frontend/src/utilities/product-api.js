const apiUrl = process.env.REACT_APP_API_URL
// console.log("api url: ", apiUrl)

// RENDER
export async function index() {
    try{
        const options = {
            method: 'GET'
        }
        const url = `${apiUrl}`
        const response = await fetch(url, options)
        
        if(response.ok){
            const requestData = response.json()
            // console.log(`index data: ${requestData}`)
            return requestData 
        } else {
            throw new Error('Invalid GET Request')
        }
    } catch(error){
        console.log(error)
        return error
    }
}
// console.log(index())

// CREATE
export async function create(data) {
    try{
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(apiUrl, options)

        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid POST Request")
        }

    } catch(error){
        console.log(error)
        return error
    }
}

// SHOW
export async function details(id) {
    try{
        const options = {
            method: 'GET',
        }
        const url = `${apiUrl}/${id}`
        const response = await fetch(url, options)
        // console.log(requestFetch)

        if(response.ok){
            const requestData = response.json()
            // console.log(`show data: ${requestData}`)
            return requestData
        } else {
            throw new Error('Invalid GET Request')
        }
    } catch(error){
        console.log(error)
        return error
    }
}

// UPDATE
export async function update(id, data) {
    try{
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const url = `${apiUrl}/${id}`
        const response = await fetch(url, options)

        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid PUT Request")
        }

    } catch(error){
        console.log(error)
        return error
    }
}

// DELETE
export async function destroy(id) {
    try{
        const options = {
            method: "DELETE"
        }
        const url = `${apiUrl}/${id}`
        const response = await fetch(url, options)

        if(response.ok){
            return response.json()
        } else {
            throw new Error("Invalid DELETE Request")
        }

    } catch(error){
        console.log(error)
        return error
    }
}