import React from 'react';
import { LogoSmall, LogoLarge } from '../../images/Logo';
import classes from './loader.module.scss';

export default function Loader({ style }) {
  return (
    <div className={classes.loader} style={style}>
      <div className={classes.container}>
        {/* <div className={classes.logo}></div> */}
        <img
          className={classes.__logo}
          src={LogoSmall}
          srcSet={`${LogoSmall} 300w, ${LogoLarge} 600w`}
          alt='Prathmesh'
        />
        <div className={classes.progress}></div>
      </div>
    </div>
  );
}
