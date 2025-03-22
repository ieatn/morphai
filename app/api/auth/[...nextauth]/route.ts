// @ts-nocheck
import NextAuth from "next-auth/next";
import { authOptions } from "@/app/lib/auth";

// Simple handler that doesn't export authOptions directly in the route file
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 