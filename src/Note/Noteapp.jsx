// import { useImmer } from "use-immer";
// import Noteform from "./Noteform.jsx";
// import Notelist from "./Notelist.jsx";

// let id = 8;

// const initialNotes = [
//   { id: id++, text: "Learn HTML", done: false },
//   { id: id++, text: "Learn CSS", done: false },
//   { id: id++, text: "Learn JavaScript", done: false },
//   { id: id++, text: "Learn React", done: false },
// ];

// function notesReducer(notes, action) {
//   switch (action.type) {
//     case 'ADD_NOTE': 
//     return [
//       ...notes,
//       {
//         id: id++,
//         text: action.text,
//         done: false,
//       }
//     ];
//     case 'CHANGE_NOTE':
//       return notes.map(note => {
//         note.id === action.note.id ? {...note, text: action.text, done: action.done} : note
//       });
//     case 'DELETE_NOTE':
//       return notes.filter(note => note.id !== action.note.id);
//     default:
//       return notes;
//   }
// }

// export default function NoteApp() {
//   const [notes, setNotes] = useImmer(initialNotes);

//   function handleAddNote(text) {
//     setNotes(draft => {
//       draft.push({
//         id: id++,
//         text: text, 
//         done: false,
//       });
//     });
//   }

//   function handleChangeNote(note) {
//     setNotes(draft => {
//       const index = draft.findIndex(item => item.id === note.id);
//       draft[index] = note;
//     });
//   }

//   function handleDeleteNote(note) {
//     setNotes(draft => {
//       const index = draft.findIndex(item => item.id === note.id);
//       draft.splice(index, 1);
//     });
//   }

//   return (
//     <div>
//       <h1>Note App</h1>

//       <Noteform onAddNote={handleAddNote} />

//       <Notelist
//         notes={notes}
//         onChange={handleChangeNote}
//         onDelete={handleDeleteNote}
//       />
//     </div>
//   );
// }
