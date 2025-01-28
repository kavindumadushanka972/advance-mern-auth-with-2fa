import React, { Suspense } from 'react'
import ForgotPassword from './_forgot-password'

const Page = () => {
  return (
    <Suspense>
      <ForgotPassword />
    </Suspense>
  )
}

export default Page