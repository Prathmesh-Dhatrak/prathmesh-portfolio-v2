import React from 'react';
import classes from './blogs.module.scss';
import Fade from 'react-reveal/Fade';

import { Blog } from 'components';
import blogs from './data';

export default function Blogs() {
  return (
    <section className={classes.Blogs}>
      <div className={classes.container}>
        <h3 className={classes.heading}>Blogs</h3>
        <div className={classes.Blogs__list}>
          <Fade bottom>
            {blogs.map((project, index) => {
              const { title, type, technology, description, link, repo } = project;
              return (
                <Blog title={title} type={type} key={index} technology={technology} link={link} repo={repo}>
                  {description}
                </Blog>
              );
            })}
          </Fade>
        </div>
      </div>
    </section>
  );
}
