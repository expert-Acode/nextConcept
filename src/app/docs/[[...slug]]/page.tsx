import { notFound } from "next/navigation";
import React from "react";

const Docs = ({ params }: { params: { slug: String[] } }) => {
  if (params?.slug?.length > 2) {
    // if i have 'not-found.tsx' file in present folder then show this page if not the show global 'not-found.tsx' page
    notFound();
  }

  if (params?.slug?.length === 2) {
    return (
      <h1>
        Docs features {params?.slug[0]} and concept {params?.slug[1]} .
      </h1>
    );
  } else if (params?.slug?.length === 1) {
    return <h1>Docs features {params?.slug[0]} .</h1>;
  }
  return <h1>All docs here</h1>;
};

export default Docs;
