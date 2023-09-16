<script lang="ts" module>
	import Router, {location, link} from 'svelte-spa-router';
    import PostList from './post/post-list.svelte';
    import PostCreate from './post/post-create.svelte';
    import PostPage from './post/post-page.svelte';
    $: isHome = $location == '/' || $location =='/posts';
</script>

<nav class="nav">
    {#if !isHome}
        <a class="btn" href="/posts" use:link>Back to Posts</a>
    {/if} 
</nav>

<Router routes={{
    '/': PostList,
    '/posts': PostList,
    '/posts/create': PostCreate,
    '/posts/:id': PostPage,
}} />



<style>
.nav{
    margin-block: 20px;
}
</style>
