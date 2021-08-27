import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import Form from '../../components/Form';

const Create: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h2">Criar ficha de paciente</Typography>
      <Form />
    </div>
  );
};

export default Create;
