import Todo from "./todo.jsx"; 

export default function Todolist () {
  const data = [
    { id: 0, text: "Belajar React", isCompleted: true },
    { id: 1, text: "Belajar JavaScript", isCompleted: true },
    { id: 2, text: "Belajar HTML", isCompleted: true },
    { id: 3, text: "Belajar CSS", isCompleted: false },
  ];

  return (
    <ul>
      {data.map((item) => (
        <Todo 
          key={item.id}
          text={item.text}
          isCompleted={item.isCompleted}
          isDeleted={false}
        />
      ))}
    </ul>
  );
}
