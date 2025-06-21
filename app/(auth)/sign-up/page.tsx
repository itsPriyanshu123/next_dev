
'use client'
import AuthForm from '@/components/forms/AuthFrom'
import { SignUpSchema } from '@/lib/SignUpSchema'
import React from 'react'

const SignUp = () => {
  return (
    <>
        <AuthForm
    formType="Sign_UP"
    schema={SignUpSchema}
    defaultValue={{email:'', password:'',}}
    onSubmit={((data)=>Promise.resolve({sucess:true, data}))}
    />
    </>

  )
}

export default SignUp