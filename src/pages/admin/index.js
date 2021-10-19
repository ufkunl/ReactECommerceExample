import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import "./styles.css";
import { Box } from "@chakra-ui/react";
import  Home  from "./Home";
import  Orders  from "./Orders";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import NewProduct from "./Products/new";

function Admin() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to={url}>Home</Link>
          </li>
          <li>
            <Link to={`${url}/orders`}>Orders</Link>
          </li>
          <li>
            <Link to={`${url}/products`}>Products</Link>
          </li>
        </ul>
      </nav>

      <Box mt="10">
        <Switch>
          <Route exact path={path} component={Home}></Route>
          <Route path={`${path}/orders`} component={Orders}></Route>
          <Route path={`${path}/products`} exact component={Products}></Route>
          <Route path={`${path}/products/new`} exact component={NewProduct}></Route>
          <Route path={`${path}/products/:product_id`} component={ProductDetail}></Route>
        </Switch>
      </Box>
    </div>
  );
}

export default Admin;
