import Cookies from 'js-cookie';
import axios from "axios";

export default async function PostNewCase(title, startDate, dueDate, description, id, project) {
    const auth = `${Cookies.get('tokenType')} ${Cookies.get('token')}`;
    try {
        const response = await axios.post('http://localhost:8080/manager/create-case', 
          {
            title: title, 
            startDate: startDate,
            dueDate: dueDate, 
            description: description, 
            caseTypeId: id,
            projectId: project
          },
          {
            headers: {
                'Authorization': auth
            }
          }
        );
        console.log('Success:', response.data)
        // navigate("/profile/"+response.data.id, { replace: true });
      } catch(error) {
        console.error(error);
      }   
}