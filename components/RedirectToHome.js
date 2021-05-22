import React, {useEffect} from 'react';
import { useRouter } from 'next/router'
const RedirectToHome = () => {

    const router = useRouter()
    useEffect(()=> {
        router.push('/')
    },[])
    return (
        <div className="row pt-200 text-center">
            Waiting.....
        </div>
    );
};

export default RedirectToHome;