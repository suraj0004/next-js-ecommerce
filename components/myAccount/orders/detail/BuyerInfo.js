import React from 'react';

const BuyerInfo = ({buyer}) => {
    return (
        <div className="pb-5 pt-3">
            <h4 className=""> Your Information </h4>
            <table>
                <tbody>
                    <tr>
                        <th>Name:</th>
                        <td>{buyer.name}</td>
                    </tr>
                    <tr>
                        <th>Mobile:</th>
                        <td>{buyer.phone}</td>
                    </tr>
                    <tr>
                        <th>Payment: </th>
                        <td>Cash on Delivery</td>
                    </tr>
                    <tr>
                        <th>Delivery Type: &nbsp; &nbsp;  </th>
                        <td>Pick up</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BuyerInfo;