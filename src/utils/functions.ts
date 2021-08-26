import { IFormPatient, IPatient } from './interfaces';

export  const rgMask = (value: string): string => {
    let r = value.replace(/\D/g,'');
    r = r.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/,'$1.$2.$3-$4');
    return r;
  };

export  const phoneMask = (value: string): string => {
    let r = value.replace(/\D/g, '');
    r = r.replace(/^0/, '');

    if (r.length > 11) {
      r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (r.length > 7) {
      r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, '($1) $2-$3');
    } else if (r.length > 2) {
      r = r.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
    } else if (value.trim() !== '') {
      r = r.replace(/^(\d*)/, '($1');
    }
    return r;
  };


export const treatPatient = (patient: IPatient | IFormPatient): IFormPatient => {
  const treatedPatient: IFormPatient = {
    ...patient,
    gender: Number(patient.gender),           // IMPORTANT, NEED TO DO THIS FOR UPDATE
    maritalStatus: Number(patient.maritalStatus),
    birthdate: `${Date.parse(patient.birthdate)}`,
    rg: rgMask(patient.rg)
  };

  return treatedPatient;
};
