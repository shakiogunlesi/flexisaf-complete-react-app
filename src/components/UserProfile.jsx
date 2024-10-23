import React, { useState } from 'react';

function UserProfile({ user }) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="p-4 bg-white shadow-md rounded-lg m-4">
      <img src={user.image} alt={user.name} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-xl font-semibold text-center mt-4">{user.name}</h2>
      <p className="text-center mt-2 text-gray-600">{user.description}</p>
      <div className="text-center mt-4">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => setLikes(likes + 1)}
        >
          Like
        </button>
        <p className="mt-2">Likes: {likes}</p>
      </div>
    </div>
  );
}

export default UserProfile;

