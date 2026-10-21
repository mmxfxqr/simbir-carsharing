import { AdminLoginFormHeader } from './AdminLoginFormHeader'
import { useState, type FC } from 'react'
import { AdminLoginFormInputs } from './AdminLoginFormInputs'
import { AdminLoginFormFooter } from './AdminLoginFormFooter'

export const AdminLoginForm: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleEmailChange = (value: string) => {
    setEmail(value)
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
  }

  return (
    <div className="bg-admin-white flex h-full max-h-[253.5px] w-full max-w-[376.5px] flex-col">
      <AdminLoginFormHeader />
      <div className="flex w-full flex-col gap-3.75 py-[16.5px] pr-4.5 pl-4.25">
        <AdminLoginFormInputs
          email={email}
          password={password}
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
        />
        <AdminLoginFormFooter />
      </div>
    </div>
  )
}
