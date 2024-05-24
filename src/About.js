import React from 'react';
import web from '../src/img/app-development-min_-_Copy-removebg-preview.png'
import Common from './Common';

function About() {
  return (
    <Common name=' Your Trusted Technology Partner' imgsrc={web} visit='/contact' btname='Contact Now' about='Building Solutions for a Better Tomorrow'/>
  );
}

export default About;