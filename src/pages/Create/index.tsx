import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import Form from '../../components/Form';

const Create: React.FC = () => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState<boolean>(false);

  const switchMode = (mode: boolean) => {
    console.log('mode', mode);
    setEditMode(mode);
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h2">{editMode ? 'Editar' : 'Criar'} ficha de paciente</Typography>
      <Form switchMode={switchMode} />
    </div>
  );
};

export default Create;
