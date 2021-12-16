import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
//import ItemCount from './ItemCount';
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

  return (
      <>
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
           title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          aqui va el item count
          {/* <ItemCount></ItemCount> */}
      </CardActions>
    </Card>
    </Grid>
    </>
  );
}
