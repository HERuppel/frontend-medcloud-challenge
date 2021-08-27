import React, { useState, useEffect } from 'react';
import { TextField, Button, InputLabel, RadioGroup, FormControl, FormControlLabel, FormLabel, Radio, Select, MenuItem, Typography, Chip } from '@material-ui/core';

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { Check } from '@material-ui/icons';
import { Loading } from '../../global/common/commonStyles';
import useStyles from './styles';

import Swal from 'sweetalert2';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { IFormPatient, IPatient } from '../../utils/interfaces';
import { useApi } from '../../hooks/patientApi';
import { phoneMask, rgMask } from '../../utils/functions';
import { useLocation } from 'react-router-dom';
import { theme } from '../../global/theme';

interface IPatientToEdit {
  state: {
    patientToEdit?: IFormPatient
  }
}

const Form = (): JSX.Element => {
  const classes = useStyles();
  const { state } = useLocation() as IPatientToEdit;
  const { createPatient, updatePatient } = useApi();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const { register, handleSubmit, control, reset } = useForm<IFormPatient>({ defaultValues: state ? { ...state.patientToEdit } : { } as IFormPatient  });
  const editMode = state ? true : false;

  const onSubmit: SubmitHandler<IFormPatient> = async (data, e): Promise<void> => {
    e?.preventDefault();
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
      editMode
        ? await updatePatient(data)
        : await createPatient(data);
    } catch (e) {
      setError('Ocorreu um erro na criação.');
    } finally {
      reset({} as IFormPatient);
      setLoading(false);
      Swal.fire({
        title: `Registro de paciente ${editMode ? 'atualizado' : 'criado'}!`,
        icon: 'success',
        confirmButtonColor: theme.palette.primary.main,
        customClass: {
          container: classes.swal
        }
      });
    }
  };

  const basicData = (
    <div className={classes.sectionContainer}>
      <Typography className={classes.sectionTitle} color="primary">Informações básicas</Typography>
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
                color="primary"
                aria-label="gender"
                defaultValue={'1'}
                value={value ? `${value}` : '1'}
                onChange={onChange}
                name="radio-buttons-group"
              >
                <FormControlLabel color="primary" value={'1'} control={<Radio />} label="Feminino" />
                <FormControlLabel color="primary" value={'2'} control={<Radio />} label="Masculino" />
                <FormControlLabel color="primary" value={'3'} control={<Radio />} label="Outro" />
              </RadioGroup>
            )}
            control={control}
            defaultValue={'1'}
            name="gender"
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
      <Typography color="primary" variant="h2" className={classes.sectionTitle}>Informações adicionais e de contato</Typography>
      <div className={classes.contactFields}>
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextField
              type="text"
              id="outlined-basic"
              label="Telefone"
              variant="outlined"
              size="small"
              inputProps={{
                maxLength: 15 //11 numbers + special characters
              }}
              error={error === 'Insira o telefone'}
              helperText={error === 'Insira o telefone' ? error : 'Somente números'}
              value={value ? phoneMask(value) : ''}
              onChange={onChange}
              className={classes.input}
            />
          )}
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
          <Controller
            name="rg"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                type="text"
                id="outlined-basic"
                label="RG"
                variant="outlined"
                size="small"
                error={error === 'Insira o RG'}
                helperText={error === 'Insira o RG' ? error : 'Somente números'}
                inputProps={{
                  maxLength: 12
                }}
                value={value ? rgMask(value) : ''}
                onChange={onChange}
                className={classes.input}
              />
            )}
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
      <Typography color="primary" variant="h2" className={classes.sectionTitle}>Informações sobre a consulta</Typography>
      <div className={classes.medicalFiels}>
        <TextField
          type="text"
          id="outlined-basic"
          label="Assunto da consulta"
          variant="outlined"
          size="small"
          error={error === 'Insira o assunto da consulta'}
          helperText={error === 'Insira o assunto da consulta' && error}
          InputProps={{
            autoComplete: 'off'
          }}
          className={classes.subInput}
          {...register('subject')}
        />
        <TextField
          type="text"
          id="outlined-basic"
          label="Notas adicionais (opcional)"
          variant="outlined"
          multiline
          minRows={5}
          InputProps={{
            autoComplete: 'off'
          }}
          className={classes.textarea}
          {...register('notes')}
        />
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
          startIcon={loading ? <Loading loadingSize={20} /> : <Check />}
        >
            Salvar
        </Button>
      </form>
    </div>
  );
};

export default Form;
