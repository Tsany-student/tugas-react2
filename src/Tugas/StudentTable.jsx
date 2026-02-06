import { useStudents } from "./StudentContext";

export default function StudentTable() {
  const { students, dispatch } = useStudents();

  function handleDelete(id) {
    dispatch({
      type: "DELETE_STUDENT",
      payload: id
    });
  }

  function handleEdit(student) {
    const nama = prompt("Nama baru:", student.nama);
    const umur = prompt("Umur baru:", student.umur);
    const kelas = prompt("Kelas baru:", student.kelas);

    if (!nama || !umur || !kelas) return;

    dispatch({
      type: "UPDATE_STUDENT",
      payload: {
        id: student.id,
        nama,
        umur,
        kelas
      }
    });
  }

  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        {students.map(student => (
          <tr key={student.id}>
            <td>{student.nama}</td>
            <td>{student.umur}</td>
            <td>{student.kelas}</td>
            <td>
              <button onClick={() => handleEdit(student)}>Edit</button>
              <button onClick={() => handleDelete(student.id)}>Hapus</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
