import { useState } from "react";
import PropTypes from "prop-types";
import Loading from "../component/Loading";

const FormPage2 = ({ setPage }) => {
  const [formData, setFormData] = useState({
    goods: "",
    color: "",
    weight: "",
  });
  const [loading, setLoading] = useState(false);

  const handleFetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://autofeed-form-backend.onrender.com/api/v1/forms/formdata"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      setFormData({
        goods: data.data.goods || "",
        color: data.data.color || "",
        weight: data.data.weight || "",
      });
    } catch (error) {
      console.error("Error fetching form data:", error);
    } finally {
      setLoading(false);
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
      {loading ? (
        <Loading />
      ) : (
        <>
          <h2 className="header">Form - Page 2</h2>
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
        </>
      )}
    </div>
  );
};

FormPage2.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default FormPage2;
