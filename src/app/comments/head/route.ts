import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

// cache handling 
export const dynamic="force-dynamic";  // by default is "auto";
// "auto is problem in get api when build "

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  let auth = requestHeaders?.get("Authorization");

  let nextHeaders = headers();
  let auth2 = nextHeaders?.get("Authorization");

  console.log(auth2, "Next Authorization");

  const searchParams = request?.nextUrl?.searchParams;
  const query = searchParams?.get("query");

  const theme = request.cookies.get("theme");

  const cookie=cookies();
  cookie.set("resultPerPage","30");

  let cookiResult=cookie.get('resultPerPage');

  return Response.json(
    { auth, query, theme,cookiResult },
    {
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "theme=dark",
      },
    }
  );
}
