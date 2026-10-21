export interface AdminLoginFormInputsProps {
  email: string
  password: string
  onEmailChange: (inputValue: string) => void
  onPasswordChange: (inputValue: string) => void
}
