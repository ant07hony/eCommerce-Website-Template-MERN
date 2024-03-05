const apiUrl = process.env.REACT_APP_API_URL

export async function index() {
    try{
        const options = {
            method: 'GET'
        }
        const requestFetch = await fetch(apiUrl, options)
        
        if(requestFetch.ok){
            const requestData = requestFetch.json()
            // console.log(`index data: ${requestData}`)
            return requestData 
        } else {
            throw new Error('Invalid Request')
        }
    } catch(error){
        console.log(error)
        return error
    }
}

export async function create(data) {
    try{
        

    } catch(error){
        console.log(error)
        return error
    }
}

export async function details(id) {
    try{
        const options = {
            method: 'GET',
        }

        const requestFetch = await fetch(`${apiUrl}/${id}`, options)
        console.log(requestFetch)

        if(requestFetch.ok){
            const requestData = requestFetch.json()
            console.log(`show data: ${requestData}`)
            return requestData
        }else{
            throw new Error('Invalid Request')
        }
    } catch(error){
        console.log(error)
        return error
    }
}

export async function update(id, data) {
    try{

    } catch(error){
        console.log(error)
        return error
    }
}

export async function destroy(id) {
    try{

    } catch(error){
        console.log(error)
        return error
    }
}