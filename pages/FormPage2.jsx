import React from "react";

const FormPage2 = ({ formData, setFormData, previousPage, submitForm }) => {
  const { goods, color, weight } = formData;

  return (
    <div>
      <h2>Page 2</h2>
      <input
        type="text"
        placeholder="Goods"
        value={goods}
        onChange={(e) => setFormData({ ...formData, goods: e.target.value })}
      />
      <input
        type="text"
        placeholder="Color"
        value={color}
        onChange={(e) => setFormData({ ...formData, color: e.target.value })}
      />
      <input
        type="number"
        placeholder="Weight"
        value={weight}
        onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
      />
      <button onClick={previousPage}>Back</button>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default FormPage2;
