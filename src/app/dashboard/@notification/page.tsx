import Link from 'next/link'
import React from 'react'

const Notifications = () => {
  return (
    <div>
      <h1>$ Notifications $</h1>
      <Link href={'dashboard/archive'}>Archive Notifications</Link>
    </div>
  )
}

export default Notifications
