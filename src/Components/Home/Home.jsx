import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../Redux/productSlice';
import { addToCart } from '../../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { toast } from "react-toastify";
import './Home.css'

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product added successfully");
    navigate("/cart");
  };

  return (
    <Box className='Home'>
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Products
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid #ddd',
                borderRadius: '8px',
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{
                  height: 200,
                  width: 'auto',
                  margin: '0 auto',
                  objectFit: 'contain',
                  borderBottom: '2px solid #ddd',
                  marginTop:3
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif',fontSize:16}}>{product.title}</Typography>
                <Typography variant="body2" sx={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif',fontSize:13}}>${product.price}</Typography>
              </CardContent>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#1976d2',
                  color: '#fff',
                  '&:hover': {
                    backgroundColor: '#1565c0',
                  },
                  marginBottom: '16px',
                  padding: '10px 20px',
                  borderRadius: '20px',
                }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};

export default HomePage;
