import React from 'react';

export const BugIcon3 = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="red" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <ellipse cx="14" cy="17" rx="8" ry="10" />
    {/* Head */}
    <circle cx="14" cy="7" r="5" fill="darkred" />
    {/* Antennae */}
    <line x1="12" y1="2" x2="8" y2="-2" stroke="black" strokeWidth="2"/>
    <line x1="16" y1="2" x2="20" y2="-2" stroke="black" strokeWidth="2"/>
    {/* Legs */}
    <line x1="6" y1="17" x2="0" y2="15" stroke="black" strokeWidth="2"/>
    <line x1="6" y1="22" x2="0" y2="26" stroke="black" strokeWidth="2"/>
    <line x1="22" y1="17" x2="28" y2="15" stroke="black" strokeWidth="2"/>
    <line x1="22" y1="22" x2="28" y2="26" stroke="black" strokeWidth="2"/>
    {/* Extra details for 3 points */}
    <ellipse cx="14" cy="17" rx="3" ry="5" fill="maroon" opacity="0.5"/>
    <circle cx="11" cy="7" r="1" fill="white"/>
    <circle cx="17" cy="7" r="1" fill="white"/>
  </svg>
);

// 3 points
