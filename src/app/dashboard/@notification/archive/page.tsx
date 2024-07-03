import Link from 'next/link'
import React from 'react'

const ArchiveNotifications = () => {
  return (
    <div>
      <h1>$ Archive Notifications $</h1>
      <Link href={'/dashboard'}>New Notifications</Link>
    </div>
  )
}

export default ArchiveNotifications
