

const api_url = import.meta.env.VITE_API_URL;
console.log(api_url);


const createEmployee = async (formData,loggedInEmployeeToken) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token':loggedInEmployeeToken
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(`${api_url}/api/employee`, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error; // Re-throw to let calling function handle it
    }
};

const employeeService = {createEmployee}
export default employeeService;