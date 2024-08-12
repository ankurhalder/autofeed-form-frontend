import { useState, useEffect } from "react";
import { FormPage1, FormPage2 } from "../pages";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    country: "",
    goods: "",
    color: "",
    weight: "",
  });

  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api/formdata");
      const data = await response.json();
      setFormData(data);
    };

    fetchData();
  }, []);

  const nextPage = () => setPage(page + 1);
  const previousPage = () => setPage(page - 1);

  const submitForm = async () => {
    await fetch("http://localhost:5000/api/formdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    alert("Form submitted successfully!");
  };

  return (
    <div>
      {page === 1 && (
        <FormPage1
          formData={formData}
          setFormData={setFormData}
          nextPage={nextPage}
        />
      )}
      {page === 2 && (
        <FormPage2
          formData={formData}
          setFormData={setFormData}
          previousPage={previousPage}
          submitForm={submitForm}
        />
      )}
    </div>
  );
};

export default App;
