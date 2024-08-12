import { useState } from "react";
import PropTypes from "prop-types";

const FormPage2 = ({ setPage }) => {
  const [formData, setFormData] = useState({
    goods: "",
    color: "",
    weight: "",
  });

  const handleFetchData = async () => {
    try {
      const response = await fetch("/api/formData");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setFormData(data);
    } catch (error) {
      console.error("Error fetching form data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePreviousPage = () => {
    setPage(1);
  };

  return (
    <div className="form-container">
      <h2>Form - Page 2</h2>
      <form>
        <input
          type="text"
          name="goods"
          value={formData.goods}
          onChange={handleInputChange}
          placeholder="Goods"
        />
        <input
          type="text"
          name="color"
          value={formData.color}
          onChange={handleInputChange}
          placeholder="Color"
        />
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
          placeholder="Weight"
        />
        <button type="button" onClick={handleFetchData}>
          Fill Form Automatically
        </button>
        <button type="button" onClick={handlePreviousPage}>
          Previous
        </button>
      </form>
    </div>
  );
};

FormPage2.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default FormPage2;
