export const loginUser = async (username, password) =>{
    try {
        const response = await fetch("http://localhost:5001/users/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json" // tells our rest API that the body of this request will be in JSON    
            },
            body: JSON.stringify({
                "username":username,
                "password":password
            })
        })
        const data = response.json()
        console.log(data)
        
    } catch (error) {
        console.log(error)
        
    }
}