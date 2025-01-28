import React, { Suspense } from 'react'
import ConfirmAccount from './_confirm-account'

const page = () => {
  return (
    <Suspense>
      <ConfirmAccount />
    </Suspense>
  )
}

export default page