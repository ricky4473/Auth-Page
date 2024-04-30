import LoginButton from '@/components/auth/LoginButton'
import {Poppins} from 'next/font/google'
import { Button } from '@/components/ui/button'
import{cn} from '@/lib/utils'
const font=Poppins({subsets:['latin'],weight:['600']})
export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6">
        <h1 className={cn('text-6xl font-semibold text-white drop-shadow-md text-center',font.className)}>Auth</h1>
        <p className="text-white text-lg">A simple authentication service</p>
</div>
        <div className="mt-4">
          <LoginButton>
            <Button variant={'secondary'} size={'lg'}>
              Sign in
            </Button>
          </LoginButton>
        </div>
      
    </main>
  )
}
