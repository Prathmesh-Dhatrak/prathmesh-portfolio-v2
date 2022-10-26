import React from 'react';
import classes from './blogs.module.scss';
import Fade from 'react-reveal/Fade';

import { Blog, Button } from 'components';
import blogs from './data';

export default function Blogs() {
  return (
    <section className={classes.blogs} id='blogs'>
      <div className={classes.container}>
        <h3 className={classes.heading}>Blogs</h3>
        <div className={classes.blogs__list}>
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
          <div className={classes.blogs__list__action}>
            <Button link='https://blog.prathmeshdhatrak.com'>Show All Blogs</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
