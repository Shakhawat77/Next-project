import Footer from '@/Components/shared/Footer';
import Navbar from '@/Components/shared/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
          <div className='min-h-[90vh]'>
              {children}
          </div>
            <Footer></Footer>
        </div>
    );
};

export default layout;