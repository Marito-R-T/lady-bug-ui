import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainInfo from './MainInfo';
import CaseView from './CaseView';
import Box from '@mui/material/Box';
import GetProjectData from '../../hooks/GetProjectData';
import { useParams } from 'react-router-dom';

export default function Blog() {
    const [project, setProject] = React.useState(null);
    let params = useParams();

    const getProjectData = async () => {
      const response = await GetProjectData(params.id);
      return response;
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