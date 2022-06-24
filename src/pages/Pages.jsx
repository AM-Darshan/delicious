import React from 'react'
import Home from './Home'
import {Route,Routes} from "react-router-dom"
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import MealApp from './MealApp';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
function Pages() {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/meal' element={<MealApp />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/searched/:search' element={<Searched />} />
          <Route path='/recipe/:id' element={<Recipe />} />
        </Routes>
    </AnimatePresence>
       
  );
}

export default Pages