import React, { useState } from 'react';
import { TextField, Button, InputLabel, RadioGroup, FormControl, FormControlLabel, FormLabel, Radio, Select, MenuItem, Typography, Chip } from '@material-ui/core';

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { Check } from '@material-ui/icons';
import { Loading } from '../../global/common/commonStyles';
import useStyles from './styles';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { IPatient } from '../../utils/interfaces';
import { useApi } from '../../hooks/patientApi';

const Form = (): JSX.Element => {
  const classes = useStyles();
  const { create } = useApi();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { register, handleSubmit, control } = useForm<IPatient>();

  const onSubmit: SubmitHandler<IPatient> = async (data, e): Promise<void> => {
    e?.preventDefault();
    console.log(data);
    if (!data.firstName) { setError('Insira o nome'); return; }
    if (!data.lastName) { setError('Insira o sobrenome'); return; }
    if (!data.phone) { setError('Insira o telefone'); return; }
    if (!data.rg) { setError('Insira o RG'); return; }
    if (!data.occupation) { setError('Insira a ocupação'); return; }
    if (!data.address) { setError('Insira o endereço'); return; }
    if (!data.city) { setError('Insira a cidade'); return; }
    if (!data.state) { setError('Insira o estado'); return; }
    if (!data.subject) { setError('Insira o assunto da consulta'); return; }

    try {
      setLoading(true);
      (async(): Promise<void> => {
        //await create(data);
        console.log('aqui');
      })();
    } catch (e) {
      setError('Ocorreu um erro na criação.');
    } finally {
      setLoading(false);
    }
  };

  const basicData = (
    <div className={classes.sectionContainer}>
      <Typography className={classes.sectionTitle}>Informações básicas</Typography>
      <div className={classes.basicFields}>
        <TextField
          type="text"
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          size="small"
          error={error === 'Insira o nome'}
          helperText={error === 'Insira o nome' && error}
          InputProps={{
            autoComplete: 'off'
          }}
          className={classes.input}
          {...register('firstName' )}
        />
        <TextField
          id="outlined-basic"
          label="Sobrenome"
          variant="outlined"
          error={error === 'Insira o sobrenome'}
          helperText={error === 'Insira o sobrenome' && error}
          size="small"
          InputProps={{
            autoComplete: 'off'
          }}
          className={classes.input}
          {...register('lastName' )}
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
    <div className={classes.sectionContainer}>
      <Typography variant="h2" className={classes.sectionTitle}>Informações adicionais e de contato</Typography>
      <div className={classes.contactFields}>
        <TextField
          type="number"
          id="outlined-basic"
          label="Telefone"
          variant="outlined"
          size="small"
          error={error === 'Insira o telefone'}
          helperText={error === 'Insira o telefone' && error}
          className={classes.input}
          {...register('phone')}
        />
        <TextField
          type="text"
          id="outlined-basic"
          label="Endereço"
          variant="outlined"
          size="small"
          error={error === 'Insira o endereço'}
          helperText={error === 'Insira o endereço' && error}
          InputProps={{
            autoComplete: 'off'
          }}
          className={classes.input}
          {...register('address')}
          />
        <TextField
          type="number"
          id="outlined-basic"
          label="RG"
          variant="outlined"
          size="small"
          error={error === 'Insira o RG'}
          helperText={error === 'Insira o RG' && error}
          InputProps={{
            autoComplete: 'off'
          }}
          className={classes.input}
          {...register('rg')}
        />
        <TextField
          type="text"
          id="outlined-basic"
          label="Cidade"
          variant="outlined"
          size="small"
          error={error === 'Insira a cidade'}
          helperText={error === 'Insira a cidade' && error}
          InputProps={{
            autoComplete: 'off'
          }}
          className={classes.input}
          {...register('city')}
        />
        <TextField
          type="text"
          id="outlined-basic"
          label="Ocupação"
          variant="outlined"
          size="small"
          error={error === 'Insira a ocupação'}
          helperText={error === 'Insira a ocupação' && error}
          InputProps={{
            autoComplete: 'off'
          }}
          className={classes.input}
          {...register('occupation')}
        />
        <TextField
          type="text"
          id="outlined-basic"
          label="Estado"
          variant="outlined"
          size="small"
          error={error === 'Insira o estado'}
          helperText={error === 'Insira o estado' && error}
          InputProps={{
            autoComplete: 'off'
          }}
          className={classes.input}
          {...register('state')}
        />
      </div>
    </div>
  );

  const medicalInfo = (
    <div className={classes.sectionContainer}>
      <Typography variant="h2" className={classes.sectionTitle}>Informações sobre a consulta</Typography>
      <div className={classes.medicalFiels}>
        <TextField
          type="text"
          id="outlined-basic"
          label="Assunto da consulta"
          variant="outlined"
          multiline
          minRows={5}
          error={error === 'Insira o assunto da consulta'}
          helperText={error === 'Insira o assunto da consulta' && error}
          InputProps={{
            autoComplete: 'off'
          }}
          className={classes.textarea}
          {...register('subject')}
        />
        <div className={classes.chipContainer}>
          {new Array(10).fill(0).map((item, index) => (
            <Chip variant="outlined" key={index} label={item + index} color="secondary" onDelete={() => console.log('delete')} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        {basicData}
        {contactData}
        {medicalInfo}
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
