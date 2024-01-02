import Link from 'next/link'
import React from 'react'

type Props = {}

const Auth = (props: Props) => {
  const status : string = "not-authenticated"
  return (
    <div>
        {
            status === "not-authenticated" ? (
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
                
                <div>Logout</div>
                </div>
            )
        }
    </div>
  )
}

export default Auth