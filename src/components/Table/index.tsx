import React, { useState } from 'react';
import useStyles from './styles';
import { Typography, TableRow, TableCell, Collapse, IconButton, TableContainer, Paper, Table as UITable, TableHead, TableBody, Box, MenuItem, Menu, TablePagination } from '@material-ui/core';
import { KeyboardArrowUp, KeyboardArrowDown, MoreHoriz, LocalHospitalOutlined, PermContactCalendarOutlined, ContactPhoneOutlined } from '@material-ui/icons';

import { IPatient, IPatientList, IFormPatient } from '../../utils/interfaces';
import { useApi } from '../../hooks/patientApi';
import LottieLoading from '../LottieLoading';
import { NavLink } from 'react-router-dom';
import { genders, maritalStatuses } from '../../utils/enums';

import Swal from 'sweetalert2';
import { theme } from '../../global/theme';


interface ITable {
  patients: IPatientList[];
}

interface IRow {
  patient: IPatient
}

const Table = ({ patients }: ITable): JSX.Element => {
  const classes = useStyles();
  const { currentPage, deletePatient } = useApi();
  const [loading, setLoading] = useState<boolean>(false);

  const Row = ({ patient }: IRow): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const areYouSure = (patient: IPatient) => {
      Swal.fire({
        title: 'Tem certeza que deseja deletar?',
        text: 'Isso não poderá ser desfeito!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: theme.palette.primary.main,
        cancelButtonColor: theme.palette.error.main,
        confirmButtonText: 'Deletar',
        cancelButtonText: 'Cancelar',
        customClass: {
          container: classes.swal
        }
      }).then(async (result) => {
        if (result.isConfirmed) {
          await handleDelete(patient);
          Swal.fire({
            title: 'Registro de paciente deletado!',
            icon: 'success',
            confirmButtonColor: theme.palette.primary.main,
            customClass: {
              container: classes.swal
            }
          });
        }
        handleClose();
      });
    };

    const handleDelete = async (patient: IPatient): Promise<void> => {
      try {
        setLoading(true);
        await deletePatient(patient);
      } catch (e) {
        Swal.fire({
          title: 'Não foi possível deletar o paciente!',
          icon: 'error',
          confirmButtonColor: theme.palette.primary.main,
          customClass: {
            container: classes.swal
          }
        });
      } finally {
        setLoading(false);
      }
    };

    const calculateAge = (timestamp: number) => {
      const birthdate = new Date(timestamp);
      const diff = Date.now() - birthdate.getTime();
      const age = new Date(diff);

      return Math.abs(age.getUTCFullYear() - 1970);
    };

    const formatBirthdate = (timestamp: number): string => new Date(timestamp).toLocaleDateString('pt-BR');

    const patientToForm = (patient: IPatient): IFormPatient => {
      const patientToEdit: IFormPatient = {
        ...patient,
        gender: Number(genders[patient.gender as keyof typeof genders]),
        maritalStatus: maritalStatuses[patient.maritalStatus  as keyof typeof maritalStatuses],
        birthdate: new Date(Number(patient.birthdate)).toString()
      };

      return patientToEdit;
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
              <MenuItem component={NavLink} to={{
                  pathname: '/main/create',
                  state: {
                    patientToEdit: patientToForm(patient)
                  }
                }}>Editar</MenuItem>
              <MenuItem onClick={() => areYouSure(patient)}>Excluir</MenuItem>
            </Menu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box className={classes.box} margin={1}>
                  <div className={classes.personal}>
                    <div className={classes.tIcons}>
                      <Typography color="textPrimary" variant="h6">Informações Pessoais</Typography>
                      <PermContactCalendarOutlined />
                    </div>
                    <Typography><span>Nome completo: </span>{patient.firstName} {patient.lastName}</Typography>
                    <Typography><span>Registro Geral: </span>{patient.rg}</Typography>
                    <Typography><span>Data de nascimento: </span>{formatBirthdate(Number(patient.birthdate))}</Typography>
                    <Typography><span>Estado civil: </span>{patient.maritalStatus}</Typography>
                  </div>
                  <div className={classes.contact}>
                    <div className={classes.tIcons}>
                      <Typography color="textPrimary" variant="h6">Informações de contato</Typography>
                      <ContactPhoneOutlined />
                    </div>
                    <Typography><span>Telefone: </span>{patient.phone}</Typography>
                    <Typography><span>Endereço: </span>{patient.address} - {patient.city}, {patient.state}</Typography>
                    <Typography><span>Ocupação: </span>{patient.occupation}</Typography>
                  </div>
                  <div className={classes.medical}>
                    <div className={classes.tIcons}>
                      <Typography color="textPrimary" variant="h6">Informações médicas</Typography>
                      <LocalHospitalOutlined />
                    </div>
                    <Typography><span>Motivo da consulta: </span>{patient.subject}</Typography>
                    <Typography><span>Notas: </span>{patient.notes ?? 'Não possui'}</Typography>
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
      {
        loading
          ? <LottieLoading dots />
          : <UITable aria-label="collapsible table">
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
                {patients.filter((chunk: IPatientList) => (
                  chunk.page.pageNumber === currentPage.pageNumber ? chunk : null
                  ))[0]?.values.map((patient: IPatient) => (
                    <Row key={patient.creationId} patient={patient} />
                  ))
                }
              </TableBody>
            </UITable>
      }
      {/* <TablePagination
        component="div"
        count={100}
        page={currentPage.pageNumber}
        onPageChange={() => setCurrentPage({ ...currentPage, })}
        labelRowsPerPage=''
        rowsPerPage={3}

      /> */}

    </TableContainer>
  );
};

export default Table;
