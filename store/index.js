import axios from "axios";

export const state = () => ({
    notes: null
})
export const mutations = {
    setNotes(state, notes){
        state.notes = notes
    },
    SAVE_NOTE(state, editNote){
        state.notes.notes = state.notes.notes.map(note => {
            if (note.id === editNote.id) {
              note.name = editNote.name;
              note.descript = editNote.descript;
            } return note;
    })
}}
export const actions = {
    async nuxtServerInit({ commit }){
        const response = await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=6GMFT_JiyKKsQpGu5NjK5cImYx8cDTOZQeBVRqNWk6MuoUlPAslrrCsZuGE-x-owfhuoU8NRWc7D4SLWFhedId5KRlGKAHWsm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFdZZ29CQLBfofnHh8HHBeY8_1nx0sebpZXsmteNIooadMBb0nFQmVAYZpTak_o22Q&lib=MS549O9bRAKIfbsIEYldXoN8gpBRMjswI")
        const notes = response.data

        commit("setNotes", notes)
    },
    async postNote(){
        axios.post("http://httpbin.org/post",
        {notes}).then(function (responce){
            console.log(responce);
        })
    },
    saveNote({commit}, editNote) {
        commit('SAVE_NOTE', editNote)
    }
    
}