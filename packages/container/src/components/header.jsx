import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';

export function Header({ isSignedIn, onSignOut }) {
  const theme = useTheme();

  const styles = {
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    appTitle: {
      textDecoration: 'none',
    },
    toolbar: {
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
  };

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={styles.appBar}
      >
        <Toolbar sx={styles.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            component={RouterLink}
            sx={styles.appTitle}
            to="/"
          >
            App
          </Typography>
          <Button
            color="primary"
            variant="outlined"
            sx={styles.link}
            component={RouterLink}
            to={isSignedIn ? '/' : '/auth/sign-in'}
            onClick={onClick}
          >
            {isSignedIn ? 'Logout' : 'Login'}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
