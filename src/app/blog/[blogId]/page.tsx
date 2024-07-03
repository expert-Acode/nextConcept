import { Metadata } from "next";
import React from "react";

type Props = { params: { blogId: String } };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolve ${params?.blogId}`);
    }, 1000);
  });

  return {
    title: `Blogs ${title}`,
  };
};

const SecondBlog = ({ params }: Props) => {
  if (params?.blogId == "error") {
    throw new Error("Loading Error");
  }
  return (
    <div>
      <h1>$ My Second Blog :{params?.blogId}$</h1>
    </div>
  );
};

export default SecondBlog;
