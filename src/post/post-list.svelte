<script lang="ts">
    import {link} from 'svelte-spa-router'
    import PostItem from "./post-item.svelte";
    import { postsState } from '../store';
</script>

<div class="post-header">
    <h1>Posts</h1>
    <a class="btn btn-border" href="/posts/create" use:link>Create the Post</a>
</div>

<div class="post-list">
    {#each $postsState.posts as postItem}
        <PostItem post={postItem} />
    {/each}
</div>

<style lang="scss">
    
.post-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.post-list{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
    grid-gap: 15px;
}
</style>