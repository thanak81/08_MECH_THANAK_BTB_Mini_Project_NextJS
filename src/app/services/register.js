export const signUp = async (params)=> {
    const {email,password} = params;

    const response  = await fetch(`http://110.74.194.123:8989/api/todo/v1/auth/login`,{
        method: "POST",
        body: {
            user: {
                email: email,
                password : password
            }
        },
        headers: { "Content-Type": "application/json" },    })
    const data = await response.json()

    return data;
}

// export const login = async ()=> {
//     const response  = await fetch(`${process.env.API_LINK}${process.env.LOGIN}`,,{
//         method: "POST",
//         body: JSON.stringify(body),
//         headers: { "Content-Type": "application/json" },    })
//     const data = await response.json()

//     return data;
// }