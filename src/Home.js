import React from 'react';
import web from '../src/img/OIP__5_-removebg-preview.png'
import Common from './Common';

function Home() {
  return (
    <Common name='Grow your business with' imgsrc={web} visit='/service' btname='Get Started' about='We are the team of talented web developers.'/>
  );
}

export default Home;