import React from 'react';

import DashbordNav from './DashbordNav/DashbordNav';

const Dashbord = (props) => {
    return (
        <>
        <div>
            <DashbordNav />
        </div>

        <main>
            {props.children}
        </main>
        </>
    );
}

export default Dashbord;
