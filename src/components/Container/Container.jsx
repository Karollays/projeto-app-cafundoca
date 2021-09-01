import React from 'react';
import './Container.css'

const Container = (pros) => {
  return ( 
    <div className="container-root">
      {pros.children}
    </div>
   );
}
 
export default Container;