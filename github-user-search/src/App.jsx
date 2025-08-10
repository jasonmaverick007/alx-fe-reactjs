import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSearch = (username) => {
    console.log("Searching for:", username);
    // API call will go here later
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;
