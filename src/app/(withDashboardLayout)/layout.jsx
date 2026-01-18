
import DashboardSidebar from '@/Components/shared/DashboardSidebar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='flex gap-4'>
            <DashboardSidebar></DashboardSidebar>
            {children}
        </div>
    );
};

export default layout;