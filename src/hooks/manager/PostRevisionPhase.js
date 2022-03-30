import Cookies from 'js-cookie';
import axios from "axios";

export default async function PostRevisionPhase(isAccepted, submission, reason) {
    try {
        let date = new Date();
        const auth = (Cookies.get('tokenType') + ' ' + Cookies.get('token'));
        const response = await axios.post('https://ladybugger.herokuapp.com/manager/revision', {
            isAccepted: isAccepted,
            submissionId: submission,
            date: date.toISOString().split('T')[0],
            rejectReason: reason
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