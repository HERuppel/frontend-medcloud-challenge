import React from 'react';
import { Modal, Button, Typography } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { IFormPatient } from '../../utils/interfaces';
import useStyles from './styles';


interface IEditModal {
  open: boolean;
  onClose: () => void ;
}

const EditModal: React.FC<IEditModal> = ({ open, onClose }: IEditModal) => {
  const classes = useStyles();
  const { register, handleSubmit, control } = useForm<IFormPatient>();


  const body = (
    <div className={classes.modalContainer}>
      <div className={classes.header}>
        <Typography>Editar paciente</Typography>
        <Button onClick={onClose}>
          <Close />
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {body}
      </Modal>
    </div>
  );
};

export default EditModal;
