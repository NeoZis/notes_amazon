import axios from "axios";

export default {
    async nuxtServerInit({ commit }){
        const response = await axios.get("https://script.google.com/macros/s/AKfycbwyaj--oDaTwwWk35EyvFcrRedCS07E9YVwTUql/exec")
        const notes = response.data

        commit("SET_NOTES", notes)
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