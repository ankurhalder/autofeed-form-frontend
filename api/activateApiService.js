export const activateApiService = async () => {
  try {
    const response = await fetch("https://ankurhalder.onrender.com");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Welcome message:", data.message);
  } catch (error) {
    console.error("Error fetching welcome message:", error);
    // alert("An error occurred while fetching the welcome message.");
  }
};
