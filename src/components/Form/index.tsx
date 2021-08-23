import React, { useState } from 'react';
import { TextField, Button, InputLabel, RadioGroup, FormControl, FormControlLabel, FormLabel, Radio, Select, MenuItem, FormHelperText } from '@material-ui/core';

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { Check } from '@material-ui/icons';
import { Loading } from '../../global/common/commonStyles';
import useStyles from './styles';

import { useForm, SubmitHandler } from 'react-hook-form';
import { IPatient } from '../../utils/interfaces';

const Form = (): JSX.Element => {
  const classes = useStyles();
  const [loading, setLoading] = useState<boolean>(true);
  const { register, handleSubmit, reset } = useForm<IPatient>();
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const onSubmit: SubmitHandler<IPatient> = async (data): Promise<void> => {
    console.log(data);
    setLoading(!loading);
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.basicData}>
          <div className={classes.name}>
            <TextField
              type="text"
              variant="outlined"
              size="small"
              InputProps={{
                autoComplete: 'off'
              }}
              className={classes.input}
              required
              {...register('firstName', { required: true } )}
            />
            <TextField
              variant="outlined"
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
              <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Feminino" />
                <FormControlLabel value="male" control={<Radio />} label="Masculino" />
              </RadioGroup>
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Data de nascimento"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>


            <FormControl>
              <InputLabel id="demo-simple-select-helper-label">Estado civil</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={1}
              >
                <MenuItem value={1}>Solteiro(a)</MenuItem>
                <MenuItem value={2}>Casado(a)</MenuItem>
                <MenuItem value={3}>Divorciado(a)</MenuItem>
                <MenuItem value={4}>Viúvo(a)</MenuItem>
                <MenuItem value={5}>Separado(a)</MenuItem>
              </Select>
            </FormControl>

          </div>

        </div>
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
