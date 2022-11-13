type ErrorFeedbackProps = {
  message: string
}

export default function ErrorFeedback({ message }: ErrorFeedbackProps) {
  return <p className='error-feedback'>{message}</p>
}
