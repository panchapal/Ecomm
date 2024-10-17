import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../Redux/cartSlice';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { toast } from 'react-toastify';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    toast.error('Removed Successfully');
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          Shopping Cart
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ width: '80px', height: '80px', objectFit: 'contain', borderRadius: '50%' }}
                    />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      inputProps={{ min: 1 }}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleRemoveItem(item.id)}
                      fullWidth
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" align="left">
          Total: ${totalAmount.toFixed(2)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CartPage;
