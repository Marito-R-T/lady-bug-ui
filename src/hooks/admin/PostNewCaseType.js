import Cookies from 'js-cookie';
import axios from "axios";

export default async function PostNewCaseType(name, description, phases) {
    const auth = `${Cookies.get('tokenType')} ${Cookies.get('token')}`;
    try {
        const response = await axios.post('https://ladybugger.herokuapp.com/admin/create-casetype', 
          {
            name: name, 
            description: description,
            phases: phases
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