/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/LyPXpHykuJh
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client'
 
import { useRouter } from 'next/navigation'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import { MountainIcon } from "lucide-react"

export function Signin() {
  const router = useRouter()
  return (
    <Card className="mx-auto max-w-sm p-6">
      <div className="flex flex-col items-center space-y-4">
      <MountainIcon className="h-6 w-6" />
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign in</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
        </div>
      </div>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <Button className="w-full" type="submit" onClick={() => router.push('/home')}>
          Sign in
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link className="text-sm underline" href="#">
          Forgot your password?
        </Link>
      </CardFooter>
    </Card>
  )
}
