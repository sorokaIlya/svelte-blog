<script lang="ts" type="module">
    import {link} from 'svelte-spa-router'
    import type { Post } from "../types/post.type";
    export let post:Post;
</script>

<div class="post-item">
    <div class="post-item__title">{post.title}</div>
    <div class="post-item__time">{post.createdAt}</div>
    <p class="post-item__body">
        {post.body}
    </p>
    <div class="post-item__bottom">
        {#if post.updatedAt !== undefined}
            <time class="post-item__time">Updated:{post.updatedAt}</time>
        {/if}
        <a class="btn" href="/posts/{post.id}" use:link>View Post</a>
    </div>        
</div>

<style scoped lang="scss">
$base-color: #b5b0b0;
.post-item{
    position: relative;
    border: 1px solid $base-color;
    padding: 15px;
    &__title{
        font-weight: 600;
        font-size: 20px;
    }
    &__body{
        font-size: 16px;
    }
    &__time{
        font-size: 14px;
        color:gray;
    }
    &__bottom{
        padding-inline: 5px;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid $base-color;
    }

}
</style>