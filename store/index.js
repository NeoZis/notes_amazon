import axios from "axios";

export const state = () => ({
})
export const mutations = {
    setPosts(state, posts){
        state.posts = posts
    }
};
export const actions = {
    async nuxtServerInit({ commit }){
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        const posts = response.data

        commit("setPosts", posts)
    }
    
}