import React from 'react';
import { Box, LinearProgress, useTheme } from '@mui/material';

export function Progress() {
  const theme = useTheme();
  const styles = {
    bar: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  };

  return (
    <Box sx={styles.bar}>
      <LinearProgress />
    </Box>
  );
}
