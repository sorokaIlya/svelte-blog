<script lang="ts">
    import type { Post } from "../types/post.type";
    import {push} from 'svelte-spa-router'
    import { createPost,postsState } from "../store";
    import { get } from "svelte/store";
    let newPost:Partial<Post> = {
        title:'',
        body:''
    }
    const handleCreate = (ev:Event)=>{
        ev.preventDefault();    
        newPost.createdAt = (new Date()).toDateString();
        newPost.id = (get(postsState).posts.length + 1).toString();
        createPost(newPost as Post);
        push('/posts');
    }
    
</script>
<h2>Create the Post</h2>
<form class="form-post">
    <label for="title">Title</label>
    <input id="title" placeholder="Post title" bind:value={newPost.title} type="text"/>
    <label for="text">Text</label>
    <textarea id="text" placeholder="Post text" bind:value={newPost.body} />
    <button class="btn btn-border" disabled={(newPost.title === '' || newPost.body === '')} type="submit" on:click={handleCreate}>Create</button>
</form>

<style lang="scss" scoped>
.form-post {
    display: flex;
    flex-direction: column;
    max-width: 560px;
    grid-row-gap: 15px;
    textarea, input{
        border:1px solid #e5e5e5;
        padding: 5px;
    }
    textarea{
        font-family: inherit;
    }
    .btn {
        margin-top: 20px;
        background: none;
        align-self: flex-end;
    }
}
</style>