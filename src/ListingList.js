import React, { useEffect, useState } from "react";
import ListingItem from "./ListingItem";

function ListingList() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("/listings")
      .then((r) => r.json())
      .then((data) => setListings(data.listings));
  }, []);

  const listingItems = listings.map((listing) => (
    <ListingItem
      key={listing.id}
      id={listing.id}
      name={listing.address} //should name here be 'address'?
      about={listing.about}
      ammenities={listing.ammenities}
    />
  ));

  return (
    <section id="listings">
      <h2>My Listings</h2>
      <div id="listing-list">{listingItems}</div>
    </section>
  );
}

export default ListingList;
