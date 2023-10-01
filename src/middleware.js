import { NextResponse } from "next/server";

export default function middleware(req) {
    //console.log("middleware", req);
    return NextResponse.next();
}

export const config = {
    matcher: '/api/:patth*',
}