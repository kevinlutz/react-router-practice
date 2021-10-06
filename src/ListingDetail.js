import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ListingDetail() {
  const [listing, setListing] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/listings/${id}`)
      .then((r) => r.json())
      .then((data) => setListing(data.listing));
  }, [id]);

  if (!listing) return <h2>Loading...</h2>;

  const { address, about, ammenities } = listing;

  const ammenityList = ammenities.map((ammenity) => (
    <span key={ammenity}>{ammenity}</span>
  ));

  return (
    <section>
      <div className="listing-item">
        <h1>{address}</h1>
        <p>{about}</p>
        <div className="ammenities">{ammenityList}</div>
      </div>
    </section>
  );
}

export default ListingDetail;
