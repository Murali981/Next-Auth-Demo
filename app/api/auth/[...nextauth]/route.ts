import { NEXT_AUTH } from "@/app/lib/auth";
import NextAuth from "next-auth";

/// Login with password/email || login with google.com
/// With the help of providers.....
const handler = NextAuth(NEXT_AUTH);

export const GET = handler;

export const POST = handler;
