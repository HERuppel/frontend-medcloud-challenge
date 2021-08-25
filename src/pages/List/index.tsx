import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

import Table from '../../components/Table';
import { useApi } from '../../hooks/patientApi';
import LottieLoading from '../../components/LottieLoading';


const List: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const classes = useStyles({ isLoading: loading });
  const { list, patientList } = useApi();
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        await list();
        console.log('entrei');
      } catch (e) {
        setError('Erro ao carregar a lista.');
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
              <div className={classes.header}>
                <Typography className={classes.title} variant="h2" >
                  Lista de pacientes
                </Typography>
              </div>
              <div className={classes.content}>
                <Table  patients={patientList}/>
              </div>
            </>
        }
    </div>
  );
};

export default List;
