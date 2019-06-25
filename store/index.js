import axios from "axios";

export const state = () => ({
    posts: null
})
export const mutations = {
    setPosts(state, posts){
        state.posts = posts
    },
    SAVE_POST(state, editPost){
        state.posts = state.posts.map(post => {
            if (post.id === editPost.id) {
              post.title = editPost.name;
            } return post;
    })
}}
export const actions = {
    async nuxtServerInit({ commit }){
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        const posts = response.data

        commit("setPosts", posts)
    },
    saveNewPosts({commit}, editPost) {
        commit('SAVE_POST', editPost)
    }
    
}