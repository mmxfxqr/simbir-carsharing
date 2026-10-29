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
    <div className="bg-admin-white flex w-full max-w-[376.5px] flex-col overflow-hidden rounded-[9px] shadow-[0_3.5px_35px_0_#5a61691a,0_5px_5px_0_#5a61690f]">
      <AdminLoginFormHeader />
      <div className="bg-admin-white flex w-full flex-col gap-3.75 py-[16.5px] pr-4.5 pl-4.25">
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
