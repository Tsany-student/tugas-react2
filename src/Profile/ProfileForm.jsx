export default function ProfileForm({ profile, setProfile }) {
  function handleChange(event) {
    const { name, value } = event.target;
    setProfile(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <h2>Profile Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Nama"
        value={profile.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Umur"
        value={profile.age}
        onChange={handleChange}
      />

      <input
        type="text"
        name="address"
        placeholder="Alamat"
        value={profile.address}
        onChange={handleChange}
      />
    </>
  );
}
