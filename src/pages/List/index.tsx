import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

import { api } from '../../services/api';
import { IPatient } from '../../utils/interfaces';
import Table from '../../components/Table';





const List: React.FC = () => {
  const classes = useStyles();
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    (async (): Promise<void> => {
      const res = await api.get('listPatients');
      console.log(res.data);
      setPatients(res.data?.Items);
    })();
  }, []);


  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h2"  >
        Lista de pacientes
      </Typography>
      <br />
      <div className={classes.content}>
        <Table  patients={patients}/>
      </div>

    </div>
  );
};

export default List;
