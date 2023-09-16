<script lang="ts">
    import { getPostById, updatePost } from "../store";
    import { push } from "svelte-spa-router";

    export let params: Record<string, string>;
    const postEdit = getPostById(params.id);
    const handleCreate = (ev: Event) => {
        if (postEdit) {
            ev.preventDefault();
            postEdit.updatedAt = new Date().toDateString();
            updatePost(postEdit);
            push("/posts");
        }
    };
</script>

<div>
    {#if postEdit !== undefined}
        <h2>Edit Post #{params.id}</h2>
        <form class="form-post">
            <label for="title">Title</label>
            <input
                id="title"
                placeholder="Post title"
                bind:value={postEdit.title}
                type="text"
            />
            <label for="text">Text</label>
            <textarea
                id="text"
                placeholder="Post text"
                bind:value={postEdit.body}
            />
            <button class="btn btn-border" type="submit" on:click={handleCreate}
                >Update</button
            >
        </form>
    {:else}
        <div>Not found</div>
    {/if}
</div>

<style lang="scss" scoped>
    .form-post {
        display: flex;
        flex-direction: column;
        max-width: 560px;
        grid-row-gap: 15px;
        textarea,
        input {
            border: 1px solid #e5e5e5;
            padding: 5px;
        }
        textarea {
            font-family: inherit;
        }
        .btn {
            margin-top: 20px;
            background: none;
            align-self: flex-end;
        }
    }
</style>
