import React, { use } from 'react';
import States from './States';

const OrderContainer = ({promise}) => {
    const orders=use(promise)
    console.log(orders)
    return (
        <div>
            <States></States>
        </div>
    );
};

export default OrderContainer;