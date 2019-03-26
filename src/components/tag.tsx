import * as React from 'react';
import { Typography } from '@material-ui/core';

export default (props: any) => (
  <Typography
    variant="caption"
    style={{
      display: 'inline-block',
      backgroundColor: '#b0bec5',
      fontSize: 11,
      color: 'white',
      margin: '0 5px 2px 0',
      padding: '3px 5px',
      borderRadius: 4,
    }}
  >
    {props.text}
  </Typography>
)