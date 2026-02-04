// import { useState } from "react";

// export default function Note({ note, onChange, onDelete }) {
//   const [isEditing, setIsEditing] = useState(false);
//   let component;

//   function handleChangeText(e) {
//     const newNote = { ...note, text: e.target.value };
//     onChange(newNote);
//   }

//   function handleChangeDone(e) {
//     const mewNote = {
//       ...note,
//       done: e.target.checked
//     };
//     onChange(mewNote);
//   }

//   if (isEditing) {
//     component = (
//       <>
//         <input
//           value={note.text}
//           onChange={handleChangeText}
//         />
//         <button onClick={() => setIsEditing(false)}>
//           Save
//         </button>
//       </>
//     );
//   } else {
//     component = (
//       <>
//         <span>{note.text}</span>
//         <button onClick={() => setIsEditing(true)}>
//           Edit
//         </button>
//       </>
//     );
//   }

//   return (
//     <label>
//       <input
//         type="checkbox"
//         checked={note.done}
//         onChange={handleChangeDone}
//       />

//       {component}

//       <button onClick={() => onDelete(note)}>
//         Delete
//       </button>
//     </label>
//   );
// }
