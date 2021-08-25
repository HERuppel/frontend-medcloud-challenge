import React, { useState } from 'react';
import useStyles from './styles';
import { Typography, TableRow, TableCell, Collapse, IconButton, TableContainer, Paper, Table as UITable, TableHead, TableBody, Box, MenuItem, Menu } from '@material-ui/core';
import { KeyboardArrowUp, KeyboardArrowDown, MoreHoriz } from '@material-ui/icons';

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
    const [editOrDelete, setEditOrDelete] = useState<number>();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const calculateAge = (timestamp: number) => {
      const birthdate = new Date(timestamp);
      const diff = Date.now() - birthdate.getTime();
      const age = new Date(diff);

      return Math.abs(age.getUTCFullYear() - 1970);
    };


    return (
      <>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">{patient.firstName}</TableCell>
          <TableCell align="left">{patient.lastName}</TableCell>
          <TableCell align="left">{calculateAge(Number(patient.birthdate))}</TableCell>
          <TableCell align="left">{patient.gender}</TableCell>
          <TableCell align="center">
            <IconButton aria-label="expand row" size="small" onClick={handleClick}>
              <MoreHoriz />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Editar</MenuItem>
              <MenuItem onClick={handleClose}>Excluir</MenuItem>
            </Menu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Detalhes
                </Typography>
                <div>
                  <Typography>{patient.gender}</Typography>
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
            <TableCell align="left">Sobrenome</TableCell>
            <TableCell align="left">Idade</TableCell>
            <TableCell align="left">Sexo</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <Row key={patient.creationId} patient={patient} />
          ))}
        </TableBody>
      </UITable>
    </TableContainer>
  );
};

export default Table;
