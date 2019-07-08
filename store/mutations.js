import {SET_NOTES, SAVE_NOTE} from "./mutation-types"

export default {
    [SET_NOTES] (state, notes){
        state.notes = notes
    },
    [SAVE_NOTE] (state, editNote){
        if (editNote.id == null) {
            editNote.id = state.notes.notes.length+1;
            state.notes.notes.push(editNote);
        } else {
            state.notes.notes = state.notes.notes.map(note => {
                if (note.id === editNote.id) {
                  note.name = editNote.name;
                  note.descript = editNote.descript;
                } return note;
        })
        }
    }
//     DELETE_NOTE (state, id) {
//         state.notes.notes = state.notes.notes.map(note => {
//             if (note.id === id) {
//               state.notes.notes.splice(state.notes.notes.indexOf(note),1);
//             } return note;
//     }) 
// }
}