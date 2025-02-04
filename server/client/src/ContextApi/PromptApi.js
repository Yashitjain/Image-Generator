import React,{createContext,useState} from 'react'

export const PromptContext = createContext(null);

export const PromptContextProvider = (props) => {
    const [prompt,setPrompt] = useState("");
    return(
        <PromptContext.Provider value={{prompt,setPrompt}}>
            {props.children}
        </PromptContext.Provider>
    );

    
}