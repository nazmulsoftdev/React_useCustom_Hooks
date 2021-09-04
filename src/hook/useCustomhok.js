import React,{useState,useEffect} from 'react'


function useCustomhok(checkSize) {

    const [onScreenSize, setOnScreenSize] = useState(false);


    useEffect(() => {

        
    const UserScreenSize = () => {
        setOnScreenSize(window.innerWidth > checkSize)
    }

        UserScreenSize();

        window.addEventListener('resize', UserScreenSize);
        
        return () => {
            window.removeEventListener('resize', UserScreenSize);
        }

    },[checkSize]);

    
    return onScreenSize
}

export default useCustomhok
