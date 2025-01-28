import React, { Suspense } from 'react'
import ResetPassword from './_reset-password'

const page = () => {
  return (
    <Suspense>
      <ResetPassword />
    </Suspense>
  )
}

export default page