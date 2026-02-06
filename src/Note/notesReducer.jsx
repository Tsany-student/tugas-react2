// export const initialNotes = [
//   { id: 1, text: "Belajar React", done: false },
//   { id: 2, text: "Belajar useImmerReducer", done: false },
// ];

// export function notesReducer(draft, action) {
//   switch (action.type) {
//     case "ADD_NOTE": {
//       draft.push({
//         id: Date.now(),
//         text: action.text,
//         done: false,
//       });
//       break;
//     }

//     case "CHANGE_NOTE": {
//       const note = draft.find(n => n.id === action.id);
//       if (note) {
//         if (action.text !== undefined) note.text = action.text;
//         if (action.done !== undefined) note.done = action.done;
//       }
//       break;
//     }

//     case "DELETE_NOTE": {
//       return draft.filter(n => n.id !== action.id);
//     }

//     default:
//       break;
//   }
// }
