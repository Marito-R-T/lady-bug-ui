import Cookies from 'js-cookie';

export default function PostAssignPhase(devId, phaseId, caseId, /*start Date*/sd, /*due Date*/dd, description) {
    const dateInit = `${sd.getFullYear()}-${sd.getMonth() > 8 ? (sd.getMonth()+1) : ('0'+(sd.getMonth()+1))}-${sd.getDate() > 9 ? sd.getDate() : ('0'+sd.getDate())}`;
    const dateFinish = `${dd.getFullYear()}-${dd.getMonth() > 8 ? (dd.getMonth()+1) : ('0'+(dd.getMonth()+1))}-${dd.getDate() > 9 ? dd.getDate() : ('0'+dd.getDate())}`;
    const auth = (Cookies.get('tokenType') + ' ' + Cookies.get('token'));
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Acces-Control-Allow-Origin': '*', 'Authorization': auth},
    body: JSON.stringify({
        "devId": devId,
        "phaseId": phaseId,
        "caseId": caseId,
        "startDate": dateInit,
        "dueDate": dateFinish,
        "description": description
      })
    };
    fetch('http://localhost:8080/manager/assign-phase',requestOptions).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log('Success:', response)
    });
}