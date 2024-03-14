import React, { useState, useRef } from 'react';

import Type_espresso from './Type_espresso';

import Type_brewed from './Type_brewed';

import Type_latte from './Type_latte';


const Type = () => {
  
      const espressoRef = useRef(null);
      const latteRef = useRef(null);
      const brewedRef = useRef(null);
    
    return (
        <div>
      <Type_espresso ref={espressoRef} />
      <Type_latte ref={latteRef} />
      <Type_brewed ref={brewedRef} />
    </div>
  );
}

export default Type;



