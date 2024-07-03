import { Metadata } from "next";
import React from "react";

type Props={
  params: { blogId: String; reviewId: String };
};

export const generateMetadata =async ({params}:Props):Promise<Metadata>=> {

  const title=await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(`Review ${params?.reviewId}`)
    },1000)
  });

  return {
    title: `Blogs ${title}`,
  }
};

const SecondBlog = ({
  params,
}:Props ) => {
  return (
    <div>
      <h1>
        $ My {params.blogId} Blog and {params.reviewId} Review{" "}
      </h1>
    </div>
  );
};

export default SecondBlog;
