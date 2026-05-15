import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Hero } from './src/components/lp/Hero';
import { Nav } from './src/components/lp/Nav';

const html = renderToStaticMarkup(
  <div>
    <Nav />
    <Hero />
  </div>
);

console.log(html);
