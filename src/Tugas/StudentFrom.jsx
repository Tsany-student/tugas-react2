import { useState } from "react";
import { useStudents } from "./StudentContext";

export default function StudentForm() {
  const { dispatch } = useStudents();
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADD_STUDENT",
      payload: {
        id: Date.now(),
        nama,
        umur,
        kelas
      }
    });

    setNama("");
    setUmur("");
    setKelas("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Tambah Siswa</h3>

      <input
        placeholder="Nama"
        value={nama}
        onChange={e => setNama(e.target.value)}
        required
      />

      <input
        placeholder="Umur"
        type="number"
        value={umur}
        onChange={e => setUmur(e.target.value)}
        required
      />

      <input
        placeholder="Kelas"
        value={kelas}
        onChange={e => setKelas(e.target.value)}
        required
      />

      <button type="submit">Tambah</button>
    </form>
  );
}
