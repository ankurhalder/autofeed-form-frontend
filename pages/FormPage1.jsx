import React, { useState, useEffect } from "react";

const FormPage1 = ({ formData, setFormData, nextPage }) => {
  const { name, address, city, country } = formData;

  return (
    <div>
      <h2>Page 1</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
      />
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default FormPage1;
