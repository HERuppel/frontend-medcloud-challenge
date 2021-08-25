import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

import { api } from '../../services/api';
import { IPatient } from '../../utils/interfaces';
import Table from '../../components/Table';
import { useApi } from '../../hooks/patientApi';
import LottieLoading from '../../components/LottieLoading';





const List: React.FC = () => {
  const classes = useStyles();
  const { list, patientList } = useApi();
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        await list();
      } catch (e) {
        setError('Erro ao carregar lista.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);


  return (
    <div className={classes.container}>
      {
        loading
          ? <LottieLoading />
          : <>
              <Typography className={classes.title} color="primary" variant="h2"  >
                Lista de pacientes
              </Typography>
              <br />
              <div className={classes.content}>
                <Table  patients={patientList}/>
              </div>
            </>
        }
    </div>
  );
};

export default List;
