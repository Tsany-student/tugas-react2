import Todo from "./todo.jsx"; // Kita pakai komponen yang sama untuk render

export default function SiswaHadir() {
  const siswas = [
    { name: "Tsany", isHadir: true },
    { name: "Faqih", isHadir: true },
    { name: "Afid", isHadir: true },
    { name: "BJ", isHadir: true },
    { name: "Iki", isHadir: true },
    { name: "Azom", isHadir: true },
    { name: "Salapi", isHadir: true },
    { name: "Fian", isHadir: true },
    { name: "Anhar", isHadir: true },
    { name: "Faujan", isHadir: true },
    { name: "Rafa", isHadir: false },
    { name: "Bintang", isHadir: false },
    { name: "Yazid", isHadir: false },
    { name: "Avrijal", isHadir: false },
  ];

  const siswaItems = siswas.map((siswa, index) => (
    <Todo
      key={index}
      text={siswa.name}
      isCompleted={siswa.isHadir} 
      isDeleted={false} 
    />
  ));

  return (
    <ul>
      {siswaItems}
    </ul>
  );
}
