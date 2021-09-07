import React from 'react';

const Container = (props) => {
    const { children } = props;

    return <div className="container-fluid p-0">
        {children}
    </div>
}

export default Container;