import React from 'react';
import classes from './social.module.scss';

export default function SocialLinks() {
  return (
    <div className={classes.social}>
      <a href='mailto:me@prathmeshdhatrak.com' target={'_blank'} className='icon' rel='noreferrer'>
        &#xe910;
      </a>
      <a href='https://github.com/Prathmesh-Dhatrak' target={'_blank'} className='icon' rel='noreferrer'>
        &#xe908;
      </a>
      <a href='https://twitter.com/Prathmesh007_SD' target={'_blank'} className='icon' rel='noreferrer'>
        &#xe912;
      </a>
      <a href='https://www.linkedin.com/in/prathmeshsd/' target={'_blank'} className='icon' rel='noreferrer'>
        &#xe90a;
      </a>
      <a href='https://www.instagram.com/prathmesh007world/' target={'_blank'} className='icon' rel='noreferrer'>
        &#xe90e;
      </a>
    </div>
  );
}
