import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { url } from "inspector";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
  afterAuth(auth, req){
    if(auth.userId && auth.isPublicRoute){
      let path = "organisation-select";

      if(auth.orgId){
        path = `/organisation/${auth.orgId}`;
      }

      const orgSelection = new URL(path, req.url);
      return NextResponse.redirect(orgSelection);
    }

    if(!auth.userId && !auth.isPublicRoute){
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    if(auth.userId && !auth.orgId && req.nextUrl.pathname !== "/organisation-select"){
      const orgSelection = new URL("/organisation-select", req.url);
      return NextResponse.redirect(orgSelection);
    }
  }
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};