import React from 'react';
import Typography from '@mui/material/Typography';

const CommentText = (props) => {
    return (
      <Typography
        noWrap
        sx={{
          padding: props.pad ? '4px 0 12px 50px' : '0',
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '12px',
          lineHeight: '18px',
          color: '#604BE8',
        }}
        variant="caption"
        display="block"
        gutterBottom
      >
        {props.children}
      </Typography>
    );
  };

export default CommentText;
