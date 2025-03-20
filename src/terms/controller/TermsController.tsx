import React, { useState } from 'react';
import MiniNav from '@/components/common/MiniNav';

const TermsController = (props?: any) => {
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
            <MiniNav />
            {childrenWithProps}
        </div>
    );
};

export { TermsController };
