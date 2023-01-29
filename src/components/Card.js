import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  List  from '@mui/material/List';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/productActionType/productActionType';
import { useLocation } from 'react-router-dom';

export default function MediaCard({data}) {
  const {pathname} = useLocation();
  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={data.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.model}
        </Typography>
        <Typography variant='h5' component='p' fontWeight={700}>Price: ৳{data.price}</Typography>
        <Typography component="div" color="text.secondary">
          {
            data.keyFeature.map((d ,i)=> 
                  <List key={i} >
                    {d}
                  </List>)
          }
        </Typography>
      </CardContent>
      <CardActions sx={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        {
          pathname.includes('allproduct') ? <Button onClick={() => dispatch(addToCart(data))} size="small" variant='contained' >Add To Cart</Button> : 
          <Button onClick={() => dispatch(removeFromCart(data))} size="small" variant='contained' >Remove from Cart</Button>
        }
        <Button size="small" variant='contained'>Wishlist</Button>
      </CardActions>
    </Card>
  );
}