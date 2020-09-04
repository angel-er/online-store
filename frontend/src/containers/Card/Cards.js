import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {useStyles} from './cards.styles';
import ItemCard from './ItemCard';

const Card = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);
  const globalState = useSelector((state) => {
    return {products: state.Product.products};
  });

  useEffect(() => {
    getAllProducts();
  }, [products]);

  const getAllProducts = () => {
    setProducts(globalState.products);
  };

  const FormRow = () => {
    return (
      products &&
      products.map((product, i) => (
        <Grid key={i} item xs={12} sm={3}>
          {/* <Paper className={classes.paper}> */}
          <ItemCard product={product} />
          {/* </Paper> */}
        </Grid>
      ))
    );
  };
  console.log('Gloabl State: ', globalState);
  console.log(products);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
};

export default Card;
