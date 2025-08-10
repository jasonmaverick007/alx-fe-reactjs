import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function SearchBar() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "0.5rem", width: "250px" }}
        />
        <button
          type="submit"
          style={{ padding: "0.5rem", marginLeft: "0.5rem" }}
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error State */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Successful Result */}
      {userData && (
        <div style={{ border: "1px solid #ccc", padding: "1rem", width: "300px" }}>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            style={{ width: "80px", borderRadius: "50%" }}
          />
          <h3>{userData.name || userData.login}</h3>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
