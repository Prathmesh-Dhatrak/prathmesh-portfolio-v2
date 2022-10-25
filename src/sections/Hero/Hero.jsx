import React from 'react';
import classes from './hero.module.scss';
import { Link } from 'components';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <h5 className={classes.intro}>
          <span role='img' aria-label='wave emoji'>
            👋
          </span>
          Hi, there it's me
        </h5>
        <h1 className={classes.hero__name}>
          <span className={classes.emphasize}>Prathmesh</span>
          <span> Dhatrak</span>
        </h1>
        <h2 className={classes.info}>
          I like building things on the web.
          <br />I do that by using JavaScript and a lot of coffee
          <span role='img' aria-label='coffee emoji'>
            ☕
          </span>
          .
        </h2>
      </div>

      <div role='img' className={classes.waterMark}>
        (PD)
      </div>

      <div className={classes.quickContact}>
        <Link to='mailto:me@prathmeshdhatrak.com' lone>
          me@prathmeshdhatrak.com
        </Link>
        <Link to='https://github.com/Prathmesh-Dhatrak' lone>
          github.com/Prathmesh-Dhatrak
        </Link>
      </div>
    </section>
  );
}
