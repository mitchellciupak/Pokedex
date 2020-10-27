import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" allign="left">
      {'Created by '}
      <Link color="inherit" href="https://mitchellciupak.github.io/">
        Mitchell Ciupak
      </Link>{''}
      {'. '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Typography variant="body1">
        P
        <img src="https://www.pokemon.com/favicon.ico" alt="logo" className={classes.logo} width="12" height="12" />
        kedex
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
}