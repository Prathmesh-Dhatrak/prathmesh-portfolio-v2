import React from 'react';
import classes from './about.module.scss';
import Fade from 'react-reveal/Fade';

import { PrathmeshSmall, PrathmeshMedium, PrathmeshLarge } from 'images/Prathmesh';
import { Link } from 'components';
import Skills from './Skills';
import SocialLinks from '../Contact/SocialLinks';

export default function About() {
  return (
    <section className={classes.about} id='about'>
      <div className={classes.container}>
        <h3 className={classes.heading}>About me</h3>
        <Fade bottom distance={'4rem'}>
          <div className={classes.about__content}>
            <div className={classes.about__text}>
              <p className={classes.description}>
                <span role='img' aria-label='wave emoji'>
                  👋
                </span>{' '}
                Hello, world! I am Prathmesh, a full-stack engineer from Pune, India.
              </p>
              <p className={classes.description}>
                I love to design and code{' '}
                <span role='img' aria-label='code emoji'>
                  👨🏼‍💻
                </span>
                . I build high-quality applications for the web. I concentrate on writing clean, understandable and
                testable code.
              </p>
              <p className={classes.description}>
                Currently, I'm pursuing my undergrads{' '}
                <span role='img' aria-label='code graduate'>
                  👨‍🎓
                </span>{' '}
                in Computer Science Engineering at the{' '}
                <Link to='https://www.vit.edu/'>Vishwakarma Institute of Technology, Pune</Link>. I love working in and
                as a team. I'm always looking for opportunities to learn and grow.
              </p>
              <p className={classes.description}>
                When I’m not programming, I focus on my hobbies which are: Other than coding, I'm passionate about
                Movies{' '}
                <span role='img' aria-label='galaxy emoji'>
                  🎬
                </span>{' '}
                and Chess{' '}
                <span role='img' aria-label='cook emoji'>
                  ♛
                </span>
                .
              </p>
            </div>

            <figure className={classes.profile}>
              <img
                className={classes.image}
                alt='Prathmesh'
                src={PrathmeshMedium}
                srcSet={`${PrathmeshSmall} 300w, ${PrathmeshMedium} 700w, ${PrathmeshLarge} 1100w`}
              />
            </figure>
          </div>

          <Skills />
        </Fade>

        <Fade bottom>
          <div className={classes.socialLinks}>
            <SocialLinks />
          </div>
        </Fade>
      </div>
    </section>
  );
}
