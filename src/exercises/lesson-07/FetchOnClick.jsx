import './Lesson07Styles.css';
import { getSinglePost } from './api';
import { useState } from 'react';

export default function FetchOnClick() {
  const [singlePost, setSinglePost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleFetchClick() {
    setIsLoading(true);
    try {
      const post = await getSinglePost(1);
      setSinglePost(post);
    } catch (error) {
      setError('Failed to get post');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleFetchClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get post'}
      </button>
      {error && <p>{error}</p>}
      {singlePost && (
        <div className="content">
          <h2>{singlePost.title}</h2>
          <p>{singlePost.body}</p>
        </div>
      )}
    </div>
  );
}
