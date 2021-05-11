import { createStyles, CssBaseline, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
function ZHeroSection() {
  const classes = useStyles();

  return (
    <div className={classes.heroContainer}>
      <video className={classes.video} src={require('../assets/video/video-2.mp4')} autoPlay loop muted />
      <CssBaseline />
      <h1>RIDE WITH CONFIDENCE </h1>
      <p>Delivering Certification and Audit Standards
to the Ground Transportation Industry</p>

    </div >
  );
}

export default ZHeroSection;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    video: {
      objectFit: 'cover',
      width: '100vw',
      height: '100%',
      position: 'fixed',
      zIndex: -'1'
    },
    heroContainer: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.2)',
      objectFit: 'contain',
      fontSize: '30px',
      color: 'white'

    },

  })
);
