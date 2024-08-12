import { useState } from "react";

import { FormPage1, FormPage2 } from "../pages";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app-container">
      {currentPage === 1 && <FormPage1 setPage={handlePageChange} />}
      {currentPage === 2 && <FormPage2 setPage={handlePageChange} />}
    </div>
  );
};

export default App;
