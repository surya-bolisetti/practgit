import React from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardContent, CardMedia, AppBar, Toolbar, Button, TextField } from '@mui/material';
import { blue } from '@mui/material/colors';
import { useRouter } from 'next/router';

const EcommerceHome = () => {
  const router = useRouter();
  const featuredProducts = [
    { id: 1, title: 'Honey', image: '/product1.jpg', price: '$19.99' },
    { id: 2, title: 'Coffee Beans', image: '/product2.jpg', price: '$29.99' },
    { id: 2, title: 'Palm Oil', image: '/product3.jpg', price: '$29.99' },
    { id: 2, title: 'Red Chili', image: '/product4.jpg', price: '$29.99' },
    { id: 2, title: 'Black Pepper', image: '/product5.jpg', price: '$29.99' },
  ];

  const handleAccount=()=>{
   router.push('/Account');
  };

  return (
    <>
      <AppBar position="static" sx={{borderRadius: '20px'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between',backgroundColor:'#558b2f', borderRadius: '20px'}}>
          <Button color="inherit">Home</Button>
          <Button color="inherit" sx={{ marginLeft: 2 }} onClick={handleAccount}>
           Account
          </Button>
          <TextField
            variant="outlined"
            size="small"
            label="Search"
            sx={{backgroundColor: 'white' , marginLeft:'auto',borderRadius:'8px'}}
          />
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" style={{ marginTop: '30px' }}>
        <Typography variant="h1" align="center" gutterBottom sx={{ color: 'green' }}>
          Welcome to Our Store
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2"  gutterBottom sx={{color: '#9ccc65'}}> 
              Trending Products
            </Typography>
          </Grid>

          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={15} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    height="140"
                    image={product.image}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Price: {product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h2" align="center" gutterBottom>
          Special Offers
        </Typography>
        <Typography variant="h2" align="center" gutterBottom>
          New Arrivals
        </Typography>

        <footer style={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="body2">&copy; 2023 Your E-commerce Store</Typography>
        </footer>
      </Container>
    </>
  );
};

export default EcommerceHome;
