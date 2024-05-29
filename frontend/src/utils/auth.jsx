//function to read the data from the local storage 
const getAuth=async ()=>{
    const employee_token=await JSON.parse(localStorage.getItem('employee_token'));
    if (employee_token && employee_token.employee_token){
        const decodedToken=await decodeTokenPayload(employee_token.employee_token)
        employee_token.employee_role = decodedToken.employee_role
        employee_token.employee_id = decodedToken.employee_id
        employee_token.employee_first_name = decodedToken.employee_first_name
        employee_token.employee_last_name = decodedToken.employee_last_name
        return employee_token
    }else {
        return {}
    }
 
}
//function to decode  read the data from the local storage
// Function to decode the payload from the token
const decodeTokenPayload = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join('')
    );

    return JSON.parse(jsonPayload);
  };
  export default getAuth;