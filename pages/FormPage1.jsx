import { useState } from "react";
import PropTypes from "prop-types";

const FormPage1 = ({ setPage }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
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

  const handleNextPage = () => {
    setPage(2);
  };

  return (
    <div className="form-container">
      <h2>Form - Page 1</h2>
      <form>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Address"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="City"
        />
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          placeholder="Country"
        />
        <button type="button" onClick={handleFetchData}>
          Fill Form Automatically
        </button>
        <button type="button" onClick={handleNextPage}>
          Next
        </button>
      </form>
    </div>
  );
};

FormPage1.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default FormPage1;
