import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ListingList from "./ListingList";
import ListingDetail from "./ListingDetail";
import NewListingForm from "./NewListingForm";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/listings">
          <ListingList />
        </Route>
        <Route path="/listings/new">
          <NewListingForm />
        </Route>
        <Route path="/listings/:id">
          <ListingDetail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
