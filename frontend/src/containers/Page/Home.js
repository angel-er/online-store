import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';

import Navbar from '../Navbar/Navbar';
import Cards from '../Card/Cards';
import Content from './Content';

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Content />
      <Container maxWidth='lg'>
        <Cards />
      </Container>
    </Fragment>
  );
};

export default Home;
