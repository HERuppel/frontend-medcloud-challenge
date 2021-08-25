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

    const formatBirthdate = (timestamp: number): string => new Date(timestamp).toLocaleDateString('pt-BR');


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
              <Box className={classes.box} margin={1}>
                  <div className={classes.personal}>
                    <Typography variant="h6">Informações Pessoais</Typography>
                    <Typography><span>Nome completo: </span>{patient.firstName} {patient.lastName}</Typography>
                    <Typography><span>Registro Geral: </span>{patient.rg}</Typography>
                    <Typography><span>Data de nascimento: </span>{formatBirthdate(Number(patient.birthdate))}</Typography>
                    <Typography><span>Estado civil: </span>{patient.maritalStatus}</Typography>
                  </div>
                  <div className={classes.contact}>
                    <Typography variant="h6">Informações de contato</Typography>
                    <Typography><span>Telefone: </span>{patient.phone}</Typography>
                    <Typography><span>Endereço: </span>{patient.address} - {patient.city}, {patient.state}</Typography>
                    <Typography><span>Ocupação: </span>{patient.occupation}</Typography>
                  </div>
                  <div className={classes.medical}>
                    <Typography variant="h6">Informações médicas</Typography>
                    <Typography><span>Motivo da consulta: </span>{patient.subject}</Typography>
                  </div>
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
