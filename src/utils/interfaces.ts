export interface IPatient {
  patientId?: string
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
}
