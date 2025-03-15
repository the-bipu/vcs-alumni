import React, { useContext, useState } from 'react';

import MiniNav from '@/components/common/MiniNav';
import { UserContext } from '@/context/userContext';

const AccountController = (props?: any) => {
    const { userData } = useContext(UserContext);
    const {
        children,
        ...rest
    } = props;

    const [loading, setLoading] = useState<boolean>(false);
    const formattedDate = userData?.dob?.split("T")[0];

    const viewProps = {
        loading,
        setLoading,
        userData,
        formattedDate,
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

export { AccountController };
