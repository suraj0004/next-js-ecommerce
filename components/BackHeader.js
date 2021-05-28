import React from 'react';
import { useRouter } from 'next/router'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
const BackHeader = () => {
    const router = useRouter()

    const goBack = () => {
        router.back()
    }
    return (
        <h3 className="header_h3">
        <div className="container ">
            <button type="button" onClick={goBack} className="btn"> <FaRegArrowAltCircleLeft size="35" /> </button> Back
        </div>
    </h3>
    );
};

export default BackHeader;