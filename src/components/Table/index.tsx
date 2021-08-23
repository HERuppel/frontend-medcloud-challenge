import React, { useState } from 'react';
import useStyles from './styles';
import { Typography, TableRow, TableCell, Collapse, IconButton, TableContainer, Paper, Table as UITable, TableHead, TableBody, Box } from '@material-ui/core';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';

import { IPatient } from '../../utils/interfaces';

interface ITable {
  patients: IPatient[];
}

interface IRow {
  patient: IPatient
}

const Table = ({ patients }: ITable): JSX.Element => {
  const classes = useStyles();


  const Row = ({ patient }: IRow): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);

    return (
      <>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {patient.firstName}
          </TableCell>
          <TableCell align="right">{patient.lastName}</TableCell>
          <TableCell align="right">{patient.age}</TableCell>
          <TableCell align="right">{patient.sex}</TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Detalhes
                </Typography>
                <div>
                  <Typography>{patient.sex}</Typography>
                  <Typography>{patient.address}</Typography>
                  <Typography>{patient.city}</Typography>
                  <Typography>{patient.state}</Typography>
                  <Typography>{patient.phone}</Typography>
                </div>
                {/* <UITable size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Total price ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow key={patient.birthdate}>
                      <TableCell component="th" scope="row">
                        {patient.address}
                      </TableCell>
                      <TableCell>{patient.city}</TableCell>
                      <TableCell align="right">{patient.state}</TableCell>
                      <TableCell align="right">
                        {patient.maritalStatus}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </UITable> */}
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  };


  return (
    <TableContainer component={Paper} className={classes.container}>
      <UITable aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nome</TableCell>
            <TableCell align="right">Sobrenome</TableCell>
            <TableCell align="right">Idade</TableCell>
            <TableCell align="right">Sexo</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <Row key={patient.patientId} patient={patient} />
          ))}
        </TableBody>
      </UITable>
    </TableContainer>
  );
};

export default Table;
