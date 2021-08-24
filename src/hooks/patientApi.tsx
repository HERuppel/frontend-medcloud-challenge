import React, { createContext, useState, useContext } from 'react';
import { api } from '../services/api';

import { IPatient } from '../utils/interfaces';

interface IContextData {
  patientList: IPatient[];
  create: (patient: IPatient) => Promise<void>;
  list: () => Promise<void>;
}

const PatientApiContext = createContext<IContextData>({} as IContextData);

interface IProviderChildren {
  children: React.ReactNode;
}

export const PatientApiProvider: React.FC<IProviderChildren> = ({ children }: IProviderChildren) => {
  const [patientList, setPatientList] = useState<IPatient[]>([]);

  const create = async(patient: IPatient): Promise<void> => {
    const response = await api.post('createPatient', { ...patient });

    const newPatient = { ...response.data };
    const newList = { ...patientList };
    newList.push(newPatient);

    setPatientList(newList);
  };

  const list = async(): Promise<void> => {
    const response = await api.get('listPatients');

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
