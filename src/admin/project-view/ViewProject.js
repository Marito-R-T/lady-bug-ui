import * as React from 'react';
import Grid from '@mui/material/Grid';
import MainInfo from './MainInfo';
import CaseView from './CaseView';
import Box from '@mui/material/Box';

const project = {
  //id: int,
  name: 'Project Example',
  description:
    "Ejemplo de Proyecto",
  pmName: 'Mario Ramírez',
  startDate: '00/00/0000',
  dueDate: '00/00/0000',
  status: 'in progress'
  /*cases: [{
    id: int,
    nameType: 'Featured post',
    startDate: 'Nov 12, 2000',
    dueDate: 'Nov 12, 2001',
    description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    status: 'inProgress',
    phases: [{
      id: int,
      developer:String,
      userid: int,
      number:int,
      status:String(inProgress, Finished, ToDo, Canceled),
      startdate:Date,
      duedate:Date
    }],
    actual: number
  }]
  */
};

const cases = [
  {
    id: 1,
    nameType: 'Featured post',
    startDate: 'Nov 12, 2000',
    dueDate: 'Nov 12, 2001',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    status: 'inProgress',
    /* phases: [{
        developer:String,
        number:int,
        status:String(inProgress, Finished, ToDo, Canceled),
        startdate:Date,
        duedate:Date
      }],
      actual: number*/
  },
  {
    id: 2,
    nameType: 'Featured ',
    startDate: 'Nov 12, 2000',
    dueDate: 'Nov 12, 2001',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    status: 'Canceled',
  },
  {
    id: 3,
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
            <MainInfo post={project} />
            </Box>
            <Box
              px={{ xs:3, sm:5 }}
              py={{ xs:3, sm:2 }}>
              <Grid container spacing={1}>
                {cases.map((value) => (
                  <CaseView post={value} key={value.id} />
                ))}
              </Grid>
            </Box>
        </main>
      </Box>
    );
  }