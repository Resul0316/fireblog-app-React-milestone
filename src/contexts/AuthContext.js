import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

const initialValues ={title:"", url:"", text:""}

export const AuthContextProvider = (props)=>{
    const [blog, setBlog] = useState(initialValues)

return(
    <AuthContext.Provider value={{blog, setBlog}} >
        {props.children}
    </AuthContext.Provider>
    );
};

export const useAuthContext =()=>{
    return useContext(AuthContext)
}




