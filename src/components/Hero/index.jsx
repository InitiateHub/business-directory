import { React } from 'react';
import { Grid } from '@material-ui/core';

const Hero = () => {
  return (
    <div>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <div>asd</div>
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </div>
  );
};
export default Hero;
