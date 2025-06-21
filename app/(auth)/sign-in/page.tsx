'use client'

import AuthForm from '@/components/forms/AuthFrom'
import { SignInSchema } from '@/lib/SignInSchema'
import React from 'react'

const SignIn = () => {
  return (
    <>
       <AuthForm
      // ** here we are pssing props in auhth form we are passing props and form being created in Auth form 
        formType="SIGN_IN"
        schema={SignInSchema}
        defaultValue={{email:'', password:'',}}
        onSubmit={((data: any) => Promise.resolve({ success: true, data }))}
       />
    </>
  )
}


export default SignIn