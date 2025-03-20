import Footer from '@/src/common/Footer';
import Navbar from '@/src/common/Navbar';
import React, { useState } from 'react';

const JobsController = (props?: any) => {
    const {
        children,
        ...rest
    } = props;

    const [loading, setLoading] = useState<boolean>(false);

    const viewProps = {
        loading,
        setLoading,
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { ...rest, ...viewProps });
        }

        return child;
    });

    return (
        <div>
            <Navbar />
            {childrenWithProps}
            <Footer />
        </div>
    );
};

export { JobsController };
