export type TDrafPatient = {
  name: string
  caretaker: string
  email: string
  date: string
  symptoms: string
}

export type TPatient = TDrafPatient & {
  id: string
}