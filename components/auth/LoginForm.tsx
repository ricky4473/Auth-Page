import React from 'react'
import CardWrapper from './CardWrapper'
import * as z from 'zod'
import { LoginSchema } from '@/schemas'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'

const LoginForm = ({ children }: any) => {


  
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial>
      Login form!
    </CardWrapper>
  )
}

export default LoginForm
