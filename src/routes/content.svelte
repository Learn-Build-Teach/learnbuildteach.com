<script context="module">
import { getContent } from "$lib/helpers/airtable";

    export async function load(){
        try {
            const content = await getContent(20, false);
            return {props: {content}}
        }catch(err) {
            console.log(err)
        }
    }
</script>
<script>
    export let content;
</script>
<article>
	<h1>Recent Content from the LBT Community!</h1>
    <ul>
        {#each content as item}
		<li><a target="_blank" href={item.link}>
			{item.title} by {item.discordUser}
		</a></li>
        {/each}
    </ul>
</article>

<style>
    ul {
        padding-left: 0px;
    }
    li {
        padding: var(--gap-2) 0
    }
</style>
