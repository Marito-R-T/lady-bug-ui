import Cookies from 'js-cookie';
import axios from "axios";

export default async function GetProfile(profile) {
    const auth = `${Cookies.get('tokenType')} ${Cookies.get('token')}`;
    try {
        const response = await axios.get(`https://ladybugger.herokuapp.com/ladybugger/profile/${profile}`,
            {
                headers: {
                    'Authorization': auth
                }
            }
        );
        return response.data;
    } catch(error) {
        console.error(error);
    }
}