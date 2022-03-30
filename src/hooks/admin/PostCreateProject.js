import Cookies from 'js-cookie';
import axios from "axios";

export default async function PostProject(/*Name*/name, /*description*/desc, /*pm ID*/pmId, /*start Date*/sd, /*due Date*/dd) {
    try {
        const auth = (Cookies.get('tokenType') + ' ' + Cookies.get('token'));
        const response = await axios.post('https://ladybugger.herokuapp.com/admin/create-project', {
            name: name,
            description: desc,
            pmId: 4,
            startDate: sd,
            dueDate: dd
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