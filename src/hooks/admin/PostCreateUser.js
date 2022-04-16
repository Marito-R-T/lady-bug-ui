import Cookies from 'js-cookie';
import axios from "axios";

export default async function PostCreateUser(email, password, name, middleName, lastName, role) {
    try {
        const auth = (Cookies.get('tokenType') + ' ' + Cookies.get('token'));
        const response = await axios.post('https://ladybugger.herokuapp.com/api/auth/create-user', {
            email: email,
            password: password,
            name: name,
            middleName: middleName,
            lastName: lastName,
            role: role 
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        });
        console.log(response.data);
    } catch(error) {
        console.error(error)
    }
}