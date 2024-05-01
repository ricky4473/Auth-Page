import type { NextAuthConfig } from "next-auth";
import Credentials from 'next-auth/providers/credentials'
import { LoginSchema } from "./schemas";
import {getUserByEmail} from '@/data/user'
import bcrypt from 'bcryptjs'
export default {
    providers:[
        Credentials({async authorize(credentials){
            const validatedFiedls=LoginSchema.safeParse(credentials)
            if(validatedFiedls.success){
                const {email,password}=validatedFiedls.data
                const user=await getUserByEmail(email)
                if(!user || !user.password) return null
                const passwordsMatch=await bcrypt.compare(password,user.password)
                if(passwordsMatch)return user
            }
        }})
    ],
} satisfies NextAuthConfig