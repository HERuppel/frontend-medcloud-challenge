export interface IPatient {
  patientId: string
  creationId: string
  firstName: string
  lastName: string
  birthdate: string
  rg: string
  gender: string
  maritalStatus: string
  address: string
  city: string
  state: string
  phone: string
  occupation: string
  subject: string
  notes?: string
}

export interface IFormPatient {
  firstName: string
  lastName: string
  birthdate: string
  rg: string
  gender: string | number
  maritalStatus: number
  address: string
  city: string
  state: string
  phone: string
  occupation: string
  subject: string
  notes?: string
}

export interface IPages {
  pageNumber: number;
  lastEvaluatedKey: {
    patientId: string | number;
    creationId: string | number;
  }
}


export interface IPatientList {
  values: IPatient[];
  page: IPages;
}

export interface IInputProps {
  name: string;
  label: string;
  givenError: string;
}
