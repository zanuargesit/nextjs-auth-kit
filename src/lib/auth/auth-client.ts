import { createAuthClient } from "better-auth/react"
export const {signIn, signOut, useSession} = createAuthClient({
    baseURL: "http://localhost:3000"
})
