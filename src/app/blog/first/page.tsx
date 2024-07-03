import Link from 'next/link'
import React from 'react'

// export const metadata={
//   title:"First Blog"
// }

const FirstBlog = () => {
  return (
    <div>
      <h1>$ My First Blog $</h1>
      <Link href={'/_lib'}>
        lib
      </Link>
    </div>
  )
}

export default FirstBlog
