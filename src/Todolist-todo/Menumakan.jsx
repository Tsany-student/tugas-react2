import Todo from "./todo.jsx"; 

export default function MenuMakan() {
  const menus = [
    { name: "Makan Pagi", isCompleted: true },
    { name: "Makan Siang", isCompleted: false },
    { name: "Makan Malam", isCompleted: false },
  ];

  const menuItems = menus.map((menu, index) => (
    <Todo
      key={index}
      text={menu.name}
      isCompleted={menu.isCompleted} 
      isDeleted={false} 
    />
  ));

  return (
    <ul>
      {menuItems}
    </ul>
  );
}
