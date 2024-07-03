import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = comments?.find((com) => com?.id === parseInt(params?.id));
  if (!comment) {
    return new Response(JSON?.stringify({ message: "Id not found" }), {
      status: 404,
    });
  }
  return Response.json({ data: comment, message: "Get a single comments" });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  let body = await request?.json();

  const index = comments?.findIndex((com) => com?.id === parseInt(params?.id));
  if (index == -1) {
    return new Response(JSON?.stringify({ message: "Id not found" }), {
      status: 404,
    });
  }

  comments[index].text = body?.text;

  return Response.json({
    data: comments[index],
    message: "Comment is updated",
  });
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
  ) {
  
    const index = comments?.findIndex((com) => com?.id === parseInt(params?.id));
    if (index == -1) {
      return new Response(JSON?.stringify({ message: "Id not found" }), {
        status: 404,
      });
    }
  
    let deletedComment=comments[index];
  
    comments.splice(index,1)

    return Response.json({
      data: deletedComment,
      message: "Comment deleted success",
    });
  }
