import React from 'react';

import Aisle from './Aisle';
import Brand from './Brand';
import Offer from './Offer';

class Weekly extends React.Component {

    render() {
        return (

            <div className="container">
                <h1 className="page-title">Weekly</h1>
                <Aisle />
                <Brand />
                <Offer />
            </div>
        );
    }

}

export default Weekly;