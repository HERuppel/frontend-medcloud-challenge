import React, { createContext, useState, useContext } from 'react';
import { api } from '../services/api';
import { rgMask } from '../utils/functions';

import { IFormPatient, IPages, IPatient, IPatientList } from '../utils/interfaces';


interface IContextData {
  patientList: IPatientList[];
  createPatient: (patient: IFormPatient) => Promise<void>;
  listPatients: () => Promise<void>;
  deletePatient: (patient: IPatient) => Promise<void>;

  currentPage: IPages;
  setCurrentPage: (page: IPages) => void;

}

const PatientApiContext = createContext<IContextData>({} as IContextData);

interface IProviderChildren {
  children: React.ReactNode;
}

export const PatientApiProvider: React.FC<IProviderChildren> = ({ children }: IProviderChildren) => {
  const [patientList, setPatientList] = useState<IPatientList[]>([]);
  const [currentPage, setCurrentPage] = useState<IPages>({
    lastEvaluatedKey: {
      creationId: 0,
      patientId: 0,
    },
    pageNumber: 0
  } as IPages);
  const offset = 3;

  const createPatient = async(patient: IFormPatient): Promise<void> => {
    const treatedPatient: IFormPatient = {
      ...patient,
      gender: Number(patient.gender),           // IMPORTANT, NEED TO DO THIS FOR UPDATE
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

  const listPatients = async(): Promise<void> => {
    const exists = patientList.filter((chunk: IPatientList) => (
      chunk.page.lastEvaluatedKey === currentPage.lastEvaluatedKey ? chunk : null
    )); // PREVENT RELOADING A PAGE

    if (exists.length !== 0) return;

    const response = await api.get(`listPatients?offset=${offset}&lastItemReceived=${currentPage?.lastEvaluatedKey.creationId}`);

    const newPage: IPages = {
      lastEvaluatedKey: response.data?.LastEvaluatedKey ?? 0,
      pageNumber: 0
    };

    const patients: IPatientList[] = [
      ...patientList,
      { page: newPage, values: response.data?.Items }
    ];

    setCurrentPage(newPage);
    setPatientList(patients);
  };

  const deletePatient = async(patient: IPatient): Promise<void> => {
      await api.delete(`deletePatient/${patient.patientId}`);
  };

  return (
    <PatientApiContext.Provider
      value={{
        createPatient,
        listPatients,
        deletePatient,
        patientList,
        currentPage,
        setCurrentPage
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
