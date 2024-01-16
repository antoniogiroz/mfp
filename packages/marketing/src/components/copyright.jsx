import React from 'react';
import { Typography } from '@mui/material';
import MaterialLink from '@mui/material/Link';
import { Link } from 'react-router-dom';

export function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink component={Link} to="/" color="inherit">
        Your Website
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
