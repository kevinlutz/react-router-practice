import React from "react";
import { Link } from "react-router-dom";

function ListingItem({ id, address, about, ammenities }) {
  const ammenityList = ammenities.map((ammenity) => (
    <span key={ammenity}>{ammenity}</span>
  ));
  return (
    <div className="listing-item">
      <h3>{address}</h3>
      <p>{about}</p>
      <div className="ammenities">{ammenityList}</div>
      <Link to={`/listings/${id}`}>See more</Link>
    </div>
  );
}

export default ListingItem;
