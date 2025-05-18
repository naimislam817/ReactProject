import React, { useState } from 'react';
import GraphComponent from '../components/GraphComponent';

function DashboardPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // For graph display toggle
  const [showGraph, setShowGraph] = useState(false);

  const fetchPosts = () => {
    setLoading(true);
    setError(null);
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={fetchPosts} disabled={loading}>
        {loading ? 'Loading...' : 'Load Posts'}
      </button>

      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <hr />

      <button onClick={() => setShowGraph((prev) => !prev)}>
        {showGraph ? 'Hide Graph' : 'Display Graph'}
      </button>

      {showGraph && <GraphComponent />}
    </div>
  );
}

export default DashboardPage;
