import React,{ createContext, useState } from "react"

export const AuthorContext = createContext(null);

export const AuthorContextProvider=(props)=>{
    const [author,setAuthor] = useState("");
    return(
        <AuthorContext.Provider value={{author,setAuthor}}>
            {props.children}
        </AuthorContext.Provider>
    );
}