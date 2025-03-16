import React, { useState } from 'react';
import Navbar from '@/src/common/Navbar';
import Footer from '@/src/common/Footer';

const DonateController = (props?: any) => {
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

export { DonateController };
