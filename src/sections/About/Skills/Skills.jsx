import React from 'react';
import classes from './skills.module.scss';

export default function Skills() {
  return (
    <div className={classes.skills}>
      <h4 className={classes.subheading}>Proficient skills</h4>
      <div className={classes.skill_rack}>
        <span className='logo logo-html'>
          <span className='path1'></span>
          <span className='path2'></span>
          <span className='path3'></span>
          <span className='path4'></span>

          <span className='tooltip'>HTML</span>
        </span>

        <span className='logo logo-css'>
          <span className='path1'></span>
          <span className='path2'></span>

          <span className='tooltip'>CSS</span>
        </span>

        <span className='logo logo-javascript-rounded'>
          <span className='path1'></span>
          <span className='path2'></span>

          <span className='tooltip'>JavaScript</span>
        </span>

        <span className='logo logo-typescript'>
          <span className='path1'></span>
          <span className='path2'></span>

          <span className='tooltip'>TypeScript</span>
        </span>

        {/* <span className='logo logo-java'>
          <span className='path1'></span>
          <span className='path2'></span>
          <span className='path3'></span>
          <span className='path4'></span>
          <span className='path5'></span>

          <span className='tooltip'>Java</span>
        </span>

        <span className='logo logo-python'>
          <span className='path1'></span>
          <span className='path2'></span>

          <span className='tooltip'>Python</span>
        </span> */}

        <span className='logo logo-git'>
          <span className='tooltip'>Git</span>
        </span>

        <span className='logo logo-nodejs'>
          <span className='tooltip'>Node JS</span>
        </span>

        {/* <span className='logo logo-jestjsio-icon'>
          <span className='tooltip'>Jest</span>
        </span>

        <span className='logo logo-express'>
          <span className='tooltip'>Express JS</span>
        </span>

        <span className='logo logo-nestjs-icon'>
          <span className='tooltip'>Nest JS</span>
        </span> */}

        <span className='logo logo-react'>
          <span className='tooltip'>React JS</span>
        </span>
        <span className='logo logo-react'>
          <span className='tooltip'>React Native</span>
        </span>
        <span className='logo logo-next-js'>
          <span className='tooltip'>Next JS</span>
        </span>

        <span className='logo logo-sass'>
          <span className='tooltip'>SASS</span>
        </span>

        <span className='logo logo-styled-components'>
          <span className='path1'></span>
          <span className='path2'></span>
          <span className='path3'></span>
          <span className='path4'></span>
          <span className='path5'></span>
          <span className='path6'></span>
          <span className='path7'></span>
          <span className='path8'></span>
          <span className='path9'></span>
          <span className='path10'></span>
          <span className='path11'></span>
          <span className='path12'></span>
          <span className='path13'></span>
          <span className='path14'></span>
          <span className='path15'></span>
          <span className='path16'></span>

          <span className='tooltip'>styled-components</span>
        </span>

        <span className='logo logo-mongodb'>
          <span className='path1'></span>
          <span className='path2'></span>
          <span className='path3'></span>
          <span className='path4'></span>
          <span className='path5'></span>
          <span className='path6'></span>
          <span className='path7'></span>
          <span className='path8'></span>
          <span className='path9'></span>
          <span className='path10'></span>
          <span className='path11'></span>
          <span className='path12'></span>
          <span className='path13'></span>
          <span className='path14'></span>
          <span className='path15'></span>
          <span className='path16'></span>

          <span className='tooltip'>MongoDB</span>
        </span>

        <span className='logo logo-mysql'>
          <span className='tooltip'>MySQL</span>
        </span>

        <span className='logo logo-figma'>
          <svg width='25' viewBox='0 0 70 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M17.3754 100C26.9633 100 34.7448 92.5334 34.7448 83.3334V66.6667H17.3754C7.78748 66.6667 0.00598145 74.1334 0.00598145 83.3334C0.00598145 92.5334 7.78748 100 17.3754 100Z'
              fill='#0ACF83'
            />
            <path
              d='M0.00598145 49.9999C0.00598145 40.7999 7.78748 33.3333 17.3754 33.3333H34.7448V66.6666H17.3754C7.78748 66.6666 0.00598145 59.1999 0.00598145 49.9999Z'
              fill='#A259FF'
            />
            <path
              d='M0.00390625 16.6667C0.00390625 7.46667 7.7854 0 17.3733 0H34.7427V33.3333H17.3733C7.7854 33.3333 0.00390625 25.8667 0.00390625 16.6667Z'
              fill='#F24E1E'
            />
            <path
              d='M34.7458 0H52.1152C61.7031 0 69.4846 7.46667 69.4846 16.6667C69.4846 25.8667 61.7031 33.3333 52.1152 33.3333H34.7458V0Z'
              fill='#FF7262'
            />
            <path
              d='M69.4846 49.9999C69.4846 59.1999 61.7031 66.6666 52.1152 66.6666C42.5273 66.6666 34.7458 59.1999 34.7458 49.9999C34.7458 40.7999 42.5273 33.3333 52.1152 33.3333C61.7031 33.3333 69.4846 40.7999 69.4846 49.9999Z'
              fill='#1ABCFE'
            />
          </svg>
          <span className='tooltip'>Figma</span>
        </span>
        <span className='logo logo-firebase'>
          <svg width='40' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M16.6667 77.0834L48.4042 17.575C49.073 16.3209 50.8813 16.3438 51.5167 17.6167L62.5001 39.5834L16.6667 77.0834Z'
              fill='#FF8F00'
            />
            <path
              d='M16.6667 77.0666L28.2209 5.81872C28.523 3.95413 31.0272 3.54997 31.9022 5.22497L54.1667 47.9L16.6667 77.0666Z'
              fill='#FFA000'
            />
            <path d='M16.6833 77.0541L17.1 76.727L53.6188 46.8499L43.3188 27.1083L16.6833 77.0541Z' fill='#FF6F00' />
            <path
              d='M16.6667 77.0834L72.2209 23.5146C73.3855 22.3917 75.3292 23.0542 75.5667 24.6542L83.3334 77.0834L52.0834 95.2979C50.8147 96.0104 49.2667 96.0104 47.998 95.2979L16.6667 77.0834Z'
              fill='#FFC400'
            />
          </svg>

          <span className='tooltip'>Firebase</span>
        </span>
      </div>
    </div>
  );
}
