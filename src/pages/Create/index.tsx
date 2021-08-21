import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import commonStyles from '../../global/common/commonStyles';

const Create: React.FC = () => {
  const classes = useStyles();
  const common = commonStyles({ loadingSize: 10 });
  const [loading, setLoading] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    setLoading(!loading);
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
          startIcon={loading ? <div className={common.loadingAnimation}></div> : 'hi'}
        >
            Criar
        </Button>
      </form>
    </div>
  );
};

export default Create;
