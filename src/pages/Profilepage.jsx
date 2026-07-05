import { useState, useEffect } from "react";

function ProfilePage() {
  const [user, setUser] = useState(null);

  const getProfile = async () => {
    const token = localStorage.getItem("token");////save token

    const request = await fetch("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,//////authorization checking
      },
    });

    const res = await request.json();
    console.log("profile:", res);
    setUser(res);
  };

  useEffect(() => {
    getProfile();
  }, []);

  if (!user) {
    return <h2>Loading...</h2>;///////checking if user data has arrived?
  }

  return (
    <div>
      <h1>Profile</h1>
      <h2>{user.firstName} {user.lastName}</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
    </div>
  );
}

export default ProfilePage;