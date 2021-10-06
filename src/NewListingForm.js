import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ammenityList = [
  "Fireplace",
  "Basement",
  "Carriage House",
  "Elevator",
  "Hot Tub",
];

function NewListingForm() {
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [ammenities, setAmmenities] = useState([]);

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      listing: { address, about, ammenities },
    };
    fetch("/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        // redirect /listings/:id
        history.push(`/listings/${data.listing.id}`);
      });
  }

  const checkboxes = ammenityList.map((ammenity) => {
    const label = ammenity.toLowerCase();
    const checked = ammenities.includes(ammenity);
    function handleChange(e) {
      if (e.target.checked) {
        setAmmenities((ammenities) => [...ammenities, ammenity]);
      } else {
        setAmmenities((ammenities) => ammenities.filter((a) => a !== ammenity));
      }
    }
    return (
      <div key={ammenity}>
        <input
          type="checkbox"
          name={label}
          id={label}
          checked={checked}
          onChange={handleChange}
        />
        <label htmlFor={label}>{ammenity}</label>
      </div>
    );
  });

  return (
    <section id="form">
      <h3>Add New listing</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="about">About:</label>
        <textarea
          id="about"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />

        <fieldset>
          <legend>Ammenities</legend>
          {checkboxes}
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default NewListingForm;
