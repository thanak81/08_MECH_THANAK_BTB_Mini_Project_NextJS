import { useToast } from "@/components/ui/use-toast";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // if (!credentials || !credentials?.email || !credentials?.password) {
        //   return null;
        // }
        const response = await fetch(
          process.env.NEXTAUTH_URL + "/v1/auth/login",
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json()
        console.log(data)
        if(!data.token){
          return;
        }else{
          return data;
        }
        // const login = async(body)=> {
        //     const data = await fetch("http://110.74.194.123:8989/api/todo/v1/auth/login",{
        //     method: "POST",
        //     body: JSON.stringify(body),
        //     headers: {"Content-Type": "application.json"}
        //     })
        // }

        // return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
