import Cookies from 'js-cookie';
import axios from "axios";

export default async function PostAssignPmProject(developer, project) {
    try {
        const auth = (Cookies.get('tokenType') + ' ' + Cookies.get('token'));
        const response = await axios.post('http://localhost:8080/admin/assign-project', {
            employeeId: developer,
            projectId: project
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            }
        })
        console.log(response.data);
    } catch(error) {
        console.error(error)
    }
}