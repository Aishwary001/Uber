import { createContext, useState } from 'react';

export const CaptainDataContext = createContext();

function CaptainContext({children}) {
    const [ captain , setCaptain ] = useState(null);
    const [ isLoading , setIsLoading ] = useState(false);
    const [ error , setError ] = useState(null);

    const updateCaptain = (createCaptain) => {
       setCaptain(createCaptain);
    }

    const value = {
        captain, 
        setCaptain, 
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext;