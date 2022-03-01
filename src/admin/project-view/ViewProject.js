import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainInfo from './MainInfo';
import CaseView from './CaseView';
import Box from '@mui/material/Box';

const mainFeaturedPost = {
  name: 'Project Example',
  description:
    "Ejemplo de Proyecto",
  pmName: 'Mario Ramírez',
  startDate: '00/00/0000',
  dueDate: '00/00/0000',
  status: 'in progress'
};

const Cases = [
  {
    nameType: 'Featured post',
    startDate: 'Nov 12, 2000',
    dueDate: 'Nov 12, 2001',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    status: 'inProgress',
  },
  {
    nameType: 'Featured ',
    startDate: 'Nov 12, 2000',
    dueDate: 'Nov 12, 2001',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    status: 'Canceled',
  },
  {
    nameType: 'Featur',
    startDate: 'Nov 12, 2000',
    dueDate: 'Nov 12, 2001',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    status: 'Finished',
  },
];

export default function Blog() {
    return (
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <main>
            <Box
              px={{ xs:3, sm:5 }}
              py={{ xs:3, sm:3 }}>
            <MainInfo post={mainFeaturedPost} />
            </Box>
            <Box
              px={{ xs:3, sm:5 }}
              py={{ xs:3, sm:2 }}>
              <Grid container spacing={1}>
                {Cases.map((post) => (
                  <CaseView key={post.title} post={post} />
                ))}
              </Grid>
            </Box>
        </main>
      </Box>
    );
  }