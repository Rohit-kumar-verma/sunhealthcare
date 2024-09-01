// import { NextResponse } from 'next/server';

// export function middleware(request) {
//   const { pathname } = request.nextUrl;

//   console.log(pathname); // Debugging output

//   // Redirect or block access based on path
//   if (pathname === '/login') {
//     console.log('Redirecting to 404'); // Debugging output
//     return NextResponse.redirect(new URL('/404', request.url)); // Redirect to 404 or another page
//   }

//   return NextResponse.next();
// }