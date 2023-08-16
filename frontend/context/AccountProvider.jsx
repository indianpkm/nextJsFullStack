import { createContext, useState } from "react";

export const AccountContext=createContext(null)

const AccountProvider=({children})=>{
    const [account,setAccount]=useState()
    const [image,setImage]=useState('')

    return(
        <AccountContext.Provider value={{account,setAccount,image,setImage}}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider