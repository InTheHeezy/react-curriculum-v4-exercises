import './Lesson07Styles.css';
import { getPosts } from './api';
import { useState, useEffect } from 'react';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (error) {
        setError('Failed to get posts');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      {error && <p>{error}</p>}
      <div className="content">
        {isLoading
          ? 'Loading...'
          : posts.map((post) => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))}
      </div>
    </div>
  );
}
