<script lang="ts">
	import ShareCard from '$components/shares/shareCard.svelte';
	import CardList from '$components/CardList.svelte';
	import { onMount } from 'svelte';
	import { supabase } from '$src/lib/helpers/supabase';

	let shares;

	onMount(async () => {
		const { data, error } = await supabase
			.from('Share')
			.select(
				`id, createdAt, link, title, description, imageUrl, tweetable, discordUserId,
        user:discordUserId(username)`
			)
			.order('createdAt', { ascending: false })
			.limit(50);
		if (error) {
			return console.error('failed to load shares');
		}
		shares = data;
	});
</script>

<article>
	<h1>Recent Content from the LBT Community!</h1>

	{#if shares && shares.length > 0}
		<CardList cards={shares} let:card>
			<ShareCard share={card} />
		</CardList>
	{/if}
</article>
