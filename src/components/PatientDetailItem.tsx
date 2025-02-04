
type TPatientDetailItemProps = {
  label: string
  data: string
}

const PatientDetailItem = ({ label, data }: TPatientDetailItemProps) => {
  return (
    <p className="mb-1 font-bold text-gray-600">
      {label}: <span className="font-normal">{data}</span>
    </p>
  )
}

export default PatientDetailItem