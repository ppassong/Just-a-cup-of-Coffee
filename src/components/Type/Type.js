import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Type_espresso from './Type_espresso';
import styleespresso from './Type_espresso.module.css'
import Type_brewed from './Type_brewed';
import stylebrewed from './Type_brewed'
import Type_latte from './Type_latte';
import styleLatte from './Type_latte.module.css'
import type_espresso from '../../source/image/type_espresso.png';
import latte_gate from '../../source/image/latte_gate.jpg';
import drip_coffee from '../../source/image/drip_coffee.png';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, FadeUp, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


const Type = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleLeave = () => {
        setIsHovered(false);
    };
    

    
    
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