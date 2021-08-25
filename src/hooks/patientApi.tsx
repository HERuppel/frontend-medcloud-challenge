import React, { createContext, useState, useContext } from 'react';
import { api } from '../services/api';
import { rgMask } from '../utils/functions';

import { IFormPatient, IPatient } from '../utils/interfaces';

interface IContextData {
  patientList: IPatient[];
  create: (patient: IFormPatient) => Promise<void>;
  list: () => Promise<void>;
}

const PatientApiContext = createContext<IContextData>({} as IContextData);

interface IProviderChildren {
  children: React.ReactNode;
}

export const PatientApiProvider: React.FC<IProviderChildren> = ({ children }: IProviderChildren) => {
  const [patientList, setPatientList] = useState<IPatient[]>([]);

  const create = async(patient: IFormPatient): Promise<void> => {
    const treatedPatient: IFormPatient = {
      ...patient,
      gender: Number(patient.gender),
      maritalStatus: Number(patient.maritalStatus),
      birthdate: `${Date.parse(patient.birthdate)}`,
      rg: rgMask(patient.rg)
    };

    await api.post('createPatient', { ...treatedPatient });

    // const newPatient = { ...response.data };
    // const newList = { ...patientList };
    // newList.push(newPatient);

    // setPatientList(newList);
  };

  const list = async(): Promise<void> => {
    const response = await api.get('listPatients?offset=10&lastItemReceived=0');

    console.log('NEW', response.data?.Items);

    setPatientList(response.data?.Items);
  };

  return (
    <PatientApiContext.Provider
      value={{
        create,
        list,
        patientList
      }}
    >
      {children}
    </PatientApiContext.Provider>
  );
};

export const useApi = (): IContextData => {
  const context = useContext(PatientApiContext);

  if (!context)
    throw new Error('useApi must be use within an PatientApiProvider!');

  return context;
};
