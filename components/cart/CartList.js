import React from 'react';
import CartItem from './CartItem';

function CartList({products}) {
    return (
        <>
            {
                products.map((product,index) =>{
                    return <>
                    <CartItem product={product} />
                    {index == (products.length - 1) ?null:<hr/>}
                    </>
                })
            }
        </>
    );
}

export default CartList;