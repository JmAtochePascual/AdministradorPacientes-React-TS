type ErrorProps = {
  message: string
}

const Error = ({ message }: ErrorProps) => {

  return (
    <p className="text-red-500 text-xs mt-1">{message}</p>
  )
}

export default Error