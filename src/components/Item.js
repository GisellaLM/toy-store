import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Item({item}) {
  const classes = useStyles();
  const pathDetail=  'product/' + item.id;
  return (
      <>
      <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card className={classes.root}>
      <CardActionArea>
        <Link to={pathDetail}><CardMedia image={item.pictureUrl} className={classes.media} title={item.title} /></Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    </Grid>
    </>
  );
}
