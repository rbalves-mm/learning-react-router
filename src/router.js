import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import { Home, About } from "./pages";
import { ROUTES } from "./constants/routes";

const Router = () => {
  return (
    <BrowserRouter>
       <Switch>
         <Layout>
           <Route exact path={ROUTES.HOME} component={Home} />
           <Route exact path={ROUTES.ABOUT} component={About} />
         </Layout>
       </Switch>
    </BrowserRouter>
  );
};

export default Router;

