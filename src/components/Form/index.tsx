import React, { useState } from 'react';
import { TextField, Button, InputLabel, RadioGroup, FormControl, FormControlLabel, FormLabel, Radio, Select, MenuItem, Typography } from '@material-ui/core';

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { Check } from '@material-ui/icons';
import { Loading } from '../../global/common/commonStyles';
import useStyles from './styles';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { IPatient } from '../../utils/interfaces';

const Form = (): JSX.Element => {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { register, handleSubmit, control } = useForm<IPatient>();

  const onSubmit: SubmitHandler<IPatient> = async (data): Promise<void> => {
    console.log(data);
    setLoading(!loading);
    if (!data.firstName) { setError('Insira o nome'); return; }
    if (!data.lastName) { setError('Insira o nome'); return; }
  };

  const basicData = (
    <div className={classes.basicData}>
      <Typography className={classes.sectionTitle}>Informações básicas</Typography>
      <div className={classes.name}>
        <TextField
          type="text"
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          size="small"
          error={error === 'Insira o nome'}
          InputProps={{
            autoComplete: 'off'
          }}
          className={classes.input}
          required
          {...register('firstName', { required: true } )}
        />
        <TextField
          id="outlined-basic"
          label="Sobrenome"
          variant="outlined"
          error={error === 'Insira o sobrenome'}
          size="small"
          InputProps={{
            autoComplete: 'off'
          }}
          className={classes.input}
          required
          {...register('lastName', { required: true } )}
        />
      </div>
      <div className={classes.pickers}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gênero</FormLabel>
          <Controller
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                aria-label="sex"
                defaultValue="female"
                value={value ? value : 'female'}
                onChange={onChange}
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                <FormControlLabel value="male" control={<Radio />} label="Masculino" />
              </RadioGroup>
            )}
            control={control}
            defaultValue="female"
            name="sex"
          />
        </FormControl>
        <FormControl>
          <Controller
            render={({ field: { onChange, value } }) => (
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Data de nascimento"
                  value={value}
                  onChange={onChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            )}
            name="birthdate"
            control={control}
            defaultValue={new Date().toString()}
          />
        </FormControl>
        <FormControl>
          <Controller
            render={({ field: { onChange, value } }) => (
              <>
                <InputLabel id="demo-simple-select-helper-label">Estado civil</InputLabel>
                <Select
                  defaultValue={1}
                  value={value ? value : 1}
                  onChange={onChange}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select">
                  <MenuItem value={1}>Solteiro(a)</MenuItem>
                  <MenuItem value={2}>Casado(a)</MenuItem>
                  <MenuItem value={3}>Divorciado(a)</MenuItem>
                  <MenuItem value={4}>Viúvo(a)</MenuItem>
                  <MenuItem value={5}>Separado(a)</MenuItem>
                </Select>
              </>
            )}
            control={control}
            name="maritalStatus"
            defaultValue={1}
          />
        </FormControl>
      </div>
    </div>
  );

  const contactData = (
    <div className={classes.contactData}>

    </div>
  );

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        {basicData}
        {contactData}
        <Button
          type="submit"
          className={classes.button}
          color="primary"
          variant="contained"
          startIcon={loading ? <Loading loadingSize={10} /> : <Check />}
        >
            Salvar
        </Button>
      </form>
    </div>
  );
};

export default Form;
