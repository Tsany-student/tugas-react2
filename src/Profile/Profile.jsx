import { useContext } from "react";
import { ProfileContext } from "./ProfileContext.jsx";

export default function Profile() {
  const profile = useContext(ProfileContext);

  return (
    <div>
      <h2>Profile Info</h2>
      <p>Nama: {profile.name}</p>
      <p>Umur: {profile.age}</p>
    </div>
  );
}