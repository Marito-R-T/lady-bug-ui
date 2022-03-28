import Cookies from 'js-cookie';

export default function PostProject(/*Name*/name, /*description*/desc, /*pm ID*/pmId, /*start Date*/sd, /*due Date*/dd, navigate) {
    const auth = (Cookies.get('tokenType') + ' ' + Cookies.get('token'));
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Acces-Control-Allow-Origin': '*', 'Authorization': auth},
    body: JSON.stringify({
        "name": name,
        "description": desc,
        "pmId": 4,
        "startDate": sd,
        "dueDate": dd
      })
    };
    fetch('https://ladybugger.herokuapp.com/admin/create-project',requestOptions).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log('Success:', response)
    });
}