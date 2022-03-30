import Cookies from 'js-cookie';
import axios from "axios";

export default async function isPmDev(id, setIsPm) {
    const auth = (Cookies.get('tokenType') + ' ' + Cookies.get('token'));
    try {
        const response = await axios.get(`https://ladybugger.herokuapp.com/ladybugger/phase-job/${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': auth
            
            }
        });
        setIsPm(response.data);
        console.log(response.data)
    } catch(error) {
        console.error(error)
    }
}