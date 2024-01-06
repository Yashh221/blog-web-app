import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Auth = (props: Props) => {
  const {status} = useSession()
  return (
    <div>
        {
            status === "unauthenticated" ? (
                <Link href="/login">
                    Login
                </Link>
            ):
            (
                <div className='flex flex-row gap-x-8'>
                    <div>
                    <Link href="/write">
                    Write
                </Link>
                    </div>
                
                <div onClick={()=>signOut()}>Logout</div>
                </div>
            )
        }
    </div>
  )
}

export default Auth