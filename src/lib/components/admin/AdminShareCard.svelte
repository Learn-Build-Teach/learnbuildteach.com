<script lang="ts">
	import ShareCard from '$components/shares/shareCard.svelte';
	import { updateShare } from '$stores/sharesStore';

	export let share: any;
	const handleCheckbox = async (updates: any) => {
		try {
			await updateShare(share.id, updates);
		} catch (err) {
			console.error(err);
		}
	};
</script>

<ShareCard {share}>
	<div class="card-controls">
		<span>
			Emailable?
			<input
				type="checkbox"
				id="emailable"
				name="emailable"
				bind:checked={share.emailable}
				on:click|preventDefault={() => handleCheckbox({ emailable: !share.emailable })}
			/>
		</span>
		<span>
			Tweetable?
			<input
				type="checkbox"
				id="tweetable"
				name="tweetable"
				bind:checked={share.tweetable}
				on:click|preventDefault={() => handleCheckbox({ tweetable: !share.tweetable })}
			/>
		</span>
	</div>
	<div>
		<span>
			Tweeted?
			<input
				type="checkbox"
				id="tweeted"
				name="tweeted"
				bind:checked={share.tweeted}
				on:click|preventDefault={() => handleCheckbox({ tweeted: !share.tweeted })}
			/>
		</span>
		<span>
			Emailed?
			<input
				type="checkbox"
				id="emailed"
				name="emailed"
				bind:checked={share.emailed}
				on:click|preventDefault={() => handleCheckbox({ emailed: !share.emailed })}
			/>
		</span>
	</div>
</ShareCard>

<style>
	.card-controls {
		margin-top: var(--gap-6);
	}
</style>
