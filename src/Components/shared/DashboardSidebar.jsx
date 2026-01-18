import React from 'react';
import Link from 'next/link';
const DashboardSidebar = () => {
    return (
        <div className='w-[200px] bg-amber-800 h-screen px-4 py-3'>
           <h2 className='font-bold'>Booking Care</h2>
           <div className='flex flex-col gap-2 mt-6'>
            <Link href={'/dashboard/profile'}>profile</Link>
            <Link href={'/dashboard/my-bookings'}>My Booking</Link>
           </div>
        </div>
    );
};

export default DashboardSidebar;