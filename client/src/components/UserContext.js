import { createContext } from "react"

export const UserContext = createContext({
    authorize: false, 
    setAuthorize: () => console.log('yo i am authorizin')
});