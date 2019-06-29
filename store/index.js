import axios from "axios";

export const state = () => ({
    notes: ''
})
export const mutations = {
    setNotes(state, notes){
        state.notes = notes
    },
    SAVE_NOTE(state, editNote){
        if (editNote.id == null) {
            editNote.id == state.notes.notes.length;
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
//     DELETE_NOTE (state, id) {
//         state.notes.notes = state.notes.notes.map(note => {
//             if (note.id === id) {
//               state.notes.notes.splice(state.notes.notes.indexOf(note),1);
//             } return note;
//     }) 
// }
}
export const actions = {
    async nuxtServerInit({ commit }){
        const response = await axios.get("https://script.google.com/macros/s/AKfycbwyaj--oDaTwwWk35EyvFcrRedCS07E9YVwTUql/exec")
        const notes = response.data

        commit("setNotes", notes)
    },
    async postNote(obj){
        await axios.post("https://script.google.com/macros/s/AKfycbwyaj--oDaTwwWk35EyvFcrRedCS07E9YVwTUql/exec",
        obj.state.notes,{
            headers: {
                'Content-Type': 'text/plain'
            }
        })
        .then(function (responce){
            console.log("answer"+responce);
        }).catch(function (error) {
            console.log(error);
        })
    },
    saveNote({commit}, editNote) {
        commit('SAVE_NOTE', editNote)
    },
    // deleteNote({commit}, id) {
    //     commit('DELETE_NOTE', id)
    // }
    
}