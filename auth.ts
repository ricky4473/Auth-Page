import NextAuth from 'next-auth'
import authConfig from './auth.config'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from './lib/db'
import { getUserByID } from './data/user'
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token }) {
      return token
    },
    async session({ token, session }) {
      if(token.sub && session.user){
        session.user.id=token.sub
      }
      return session
    },
  },
})
