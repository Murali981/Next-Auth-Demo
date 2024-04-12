import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "email", type: "text", placeholder: "Email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        return {
          id: "user1",
          name: "Harkirat singh",
          email: "harkirat@gmail.com",
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn: ({ user }) => {
      if (user.email == "randomperson@gmail.com") {
        return false;
      } else return true;
    },
    jwt: ({ token, user }) => {
      console.log(token);
      return token;
    },
    session: ({ session, token, user }: any) => {
      if (session && session.user) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
};
