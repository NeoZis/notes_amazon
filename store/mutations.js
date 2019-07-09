import {SET_NOTES, SAVE_NOTE, ON_CLICK, SHOW_CHANGE} from "./mutation-types"

export default {
    [SET_NOTES] (state, notes){
        state.notes = notes
    },
    [SAVE_NOTE] (state, editNote){
        state.show = true;
        state.show_editForm = false;
        state.show_createForm = false;
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
    },
    [ON_CLICK] (state, data){
        state.show = data.click;
        state.elem = data.obj
    },
    [SHOW_CHANGE] (state, changes){
        state.show = changes.show;
        state.show_editForm = changes.show_edit;
        state.show_createForm = changes.show_create;
    }
//     DELETE_NOTE (state, id) {
//         state.notes.notes = state.notes.notes.map(note => {
//             if (note.id === id) {
//               state.notes.notes.splice(state.notes.notes.indexOf(note),1);
//             } return note;
//     }) 
// }
}