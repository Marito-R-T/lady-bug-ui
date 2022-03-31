import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainInfo from './MainInfo';
import CaseView from './CaseView';
import Box from '@mui/material/Box';
import axios from "axios";
import Cookies from 'js-cookie';

export default function Blog() {
    const [project, setProject] = React.useState(null);
    const [id, setId] = React.useState(4);

    const getProjectData = async () => {
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

    React.useEffect(() => {
      getProjectData().then((project) => setProject(project));
    }, []);

    return (
      <Box
        sx={{
          marginTop: 8,
          alignItems: 'center',
        }}
      >
        { project !== null ? 
          <main>
          <Box
            px={{ xs:3, sm:5 }}
            py={{ xs:3, sm:3 }}>
          <MainInfo post={project} />
          </Box>
          <Box
            px={{ xs:3, sm:5 }}
            py={{ xs:3, sm:2 }}>
            <Grid container spacing={1}>
              {project.cases.map((value) => (
                <CaseView post={value} key={value.id} />
              ))}
            </Grid>
          </Box>
         </main> : <p>loading data...</p>
        }
      </Box>
    );
  }