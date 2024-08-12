import PropTypes from "prop-types";
const FormPage2 = ({ formData, setFormData, previousPage, submitForm }) => {
  const { goods, color, weight } = formData;

  return (
    <div className="form-container">
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

FormPage2.propTypes = {
  formData: PropTypes.shape({
    goods: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
};

export default FormPage2;
