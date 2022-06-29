import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    //maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

export default function Item({ item }) {
  const classes = useStyles();
  const pathDetail = 'product/' + item.id;
  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={3} >
        <Link to={pathDetail} title={item.title} style={{ textDecoration: 'none' }}>
          <div className='box-item' >
            <div className={'item-img'} style={{ backgroundImage: `URL(` + item.pictureUrl + `)`, backgroundSize: 'cover' }}>
            </div>
            <div className='item-description'>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" className="pItemShortDescrp" component="p" >
                {item.shortDescription}
              </Typography>
            </div>

          </div>
        </Link>

      </Grid>
    </>
  );
}
