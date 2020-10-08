import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AddProduct from '../component/Add_Product';
import listProd from  '../component/ListProduct/index';
import homepage from '../component/Homepage';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={AddProduct} />
    <Route path="/listProd" exact component={listProd} />
    <Route path="/homepage" exact component={homepage} />
  </Switch>
);

export default Routes;