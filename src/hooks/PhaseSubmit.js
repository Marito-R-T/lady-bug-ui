import Cookies from 'js-cookie';

export default function PostPhaseDev(phaseAssignment, comment, hours, cost){
    let yourDate = new Date();
    const auth = (Cookies.get('tokenType') + ' ' + Cookies.get('token'));
    const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Acces-Control-Allow-Origin': '*', 'Authorization': auth},
    body: JSON.stringify({
        "phaseAssignmentId": phaseAssignment,
        "comment": comment,
        "hours": hours,
        "cost": cost,
        "date": yourDate.toISOString().split('T')[0]
      })
    };
    console.log(requestOptions);
    fetch('https://ladybugger.herokuapp.com/developer/submit',requestOptions).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log('Success:', response)
    });
}