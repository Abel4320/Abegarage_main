
const api_url = import.meta.env.VITE_API_URL;
const logIn=async(formData)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }
    console.log("about to send the request")
    console.log(requestOptions.body)
    const response = await fetch(`${api_url}/api/employee/login`, requestOptions);
    return response
}
const logOut =()=>{
    localStorage.removeItem("employee_token")
    
}
const logInService = {logIn,logOut}
export default logInService;