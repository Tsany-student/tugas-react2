import { useState } from "react";

export default function DaftarSiswa() {
  const [list, setList] = useState([]);
  const [nama, setNama] = useState("");

  return (
    <div>
      <input
        type="text"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Nama siswa"
      />
      <button
        onClick={() => {
          setList([...list, nama]);
          setNama("");
        }}
      >
        Tambah
      </button>

      <table border="1">
        <tr>
          <th>No</th>
          <th>Nama</th>
        </tr>

        {list.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
