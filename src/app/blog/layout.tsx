import { Metadata } from 'next';
import React from 'react'

export const metadata:Metadata={
  title:{
    default:"All Blogs Of User",
    template :"Blogs | %s"
  }
}

const BlogLayout = ({children}:{children:React.ReactNode;}) => {
  return (
    <>
      {children}
      <h4> Adding some detils about blog</h4>
    </>
  )
}

export default BlogLayout
