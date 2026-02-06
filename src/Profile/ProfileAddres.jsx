import { useContext } from "react";
import { ProfileContext } from "./ProfileContext.jsx";

export default function ProfileAddress() {
  const profile = useContext(ProfileContext);

  return (
    <div>
      <h2>Alamat</h2>
      <p>{profile.address}</p>
    </div>
  );
}