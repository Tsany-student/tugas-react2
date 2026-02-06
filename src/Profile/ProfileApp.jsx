import { useState } from "react";
import Profile from "./Profile.jsx";
import ProfileAddress from "./ProfileAddres.jsx";
import ProfileForm from "./ProfileForm.jsx";
import { ProfileContext } from "./ProfileContext.jsx";

export default function ProfileApp() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    address: "",
  });

  return (
    <ProfileContext.Provider value={profile}>
      <h1>Profile App</h1>

      <ProfileForm profile={profile} setProfile={setProfile} />
      <Profile />
      <ProfileAddress />
    </ProfileContext.Provider>
  );
}
