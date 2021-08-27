import React, { createContext, useState, useContext } from 'react';
import { api } from '../services/api';
import { rgMask, treatPatient } from '../utils/functions';

import { IFormPatient, IPages, IPatient, IPatientList } from '../utils/interfaces';


interface IContextData {
  patientList: IPatientList[];
  createPatient: (patient: IFormPatient) => Promise<void>;
  listPatients: () => Promise<void>;
  updatePatient: (patient: IFormPatient) => Promise<void>;
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
    pageNumber: 1
  } as IPages);
  const offset = 10;



  const createPatient = async(patient: IFormPatient): Promise<void> => {
    const treatedPatient = treatPatient(patient);

    const res = await api.post('createPatient', { ...treatedPatient });

    const newPatientList: IPatientList[] = [...patientList];


    newPatientList[0].values.unshift(res.data); // INDEX AT 0 WITHOUT PROPER PAGINATION

    console.log('HIER', newPatientList);
    setPatientList(newPatientList);
  };

  const listPatients = async(): Promise<void> => {
    const exists = patientList.filter((chunk: IPatientList) => (
      chunk.page.lastEvaluatedKey === currentPage.lastEvaluatedKey ? chunk : null
    )); // PREVENT RELOADING A PAGE

    if (exists.length !== 0) return;

    const response = await api.get(`listPatients?offset=${offset}&lastItemReceived=${currentPage?.lastEvaluatedKey.creationId}`);

    const newPage: IPages = {
      lastEvaluatedKey: response.data?.LastEvaluatedKey ?? 0,
      pageNumber: 1
    };

    const patients: IPatientList[] = [
      ...patientList,
      { page: newPage, values: response.data?.Items }
    ];

    setPatientList(patients);
  };

  const updatePatient = async(patient: IFormPatient): Promise<void> => {
    const treatedPatient = treatPatient(patient);

    const res = await api.put('updatePatient', { ...treatedPatient });

    const updatedPatient: IPatient = res.data.patient;

    console.log('UPDATED', updatedPatient);

    const listCopy: IPatientList[] = { ...patientList };

    const newValues: IPatient[] = listCopy[0].values.map((patient: IPatient) => (patient.creationId === updatedPatient.creationId ? updatedPatient : patient));
    //INDEX 0 FOR NOW

    const newList: IPatientList[] = [
      { page: listCopy[0].page, values: newValues }
    ];

    console.log(newList);

    setPatientList(newList);
  };

  const deletePatient = async(patient: IPatient): Promise<void> => {
      await api.delete(`deletePatient/${patient.creationId}`);

      const response = await api.get(`listPatients?offset=${offset}&lastItemReceived=${currentPage?.lastEvaluatedKey.creationId}`);

      const patients: IPatientList[] = [
        {page: currentPage, values: response.data?.Items }
      ];

      setPatientList(patients);
  };

  return (
    <PatientApiContext.Provider
      value={{
        createPatient,
        listPatients,
        updatePatient,
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
