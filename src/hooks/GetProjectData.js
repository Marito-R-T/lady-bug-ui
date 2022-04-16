import Cookies from 'js-cookie';
import axios from "axios";

export default async function GetProjectData(id) {
    const auth = `${Cookies.get('tokenType')} ${Cookies.get('token')}`;
    try {
        const response = await axios.get(`https://ladybugger.herokuapp.com/manager/get-project/${id}`,
            {
                headers: {
                    'Authorization': auth
                }
            }
        );
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.error(error);
        return null;
    }
}