import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import useStyles from './styles';

const Create: React.FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <h1>Create</h1>
      <Typography>Create</Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          id="name"
          InputProps={{
            autoComplete: 'new-password'
          }}
          className={classes.input}
        />
        <TextField
          id="name"
          className={classes.input}
        />
        <TextField
          id="name"
          className={classes.input}
        />
        <TextField
          id="name"
          className={classes.input}
        />
        <TextField
          id="name"
          className={classes.input}
        />
        <Button
          type="submit"
          className={classes.button}
          color="primary"
          variant="contained"
        >
            Criar
        </Button>
      </form>
    </div>
  );
};

export default Create;
