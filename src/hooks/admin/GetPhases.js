import Cookies from 'js-cookie';
import axios from "axios";

export default async function getPhases(caseId) {
    const auth = `${Cookies.get('tokenType')} ${Cookies.get('token')}`;
    try {
        const response = await axios.get(`https://manager-dot-gcp-4a-348317.uc.r.appspot.com/manager/get-phases/${caseId}`,
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