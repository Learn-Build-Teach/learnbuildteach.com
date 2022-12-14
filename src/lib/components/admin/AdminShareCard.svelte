<script lang="ts">
	import ShareCard from '$components/shares/shareCard.svelte';
	import Checkbox from '$components/checkbox.svelte';
	import { deleteShare, updateShare } from '$stores/sharesStore';

	export let share: any;

	const handleCheckbox = async (updates: any) => {
		try {
			await updateShare(share.id, updates);
		} catch (err) {
			console.error(err);
		}
	};
	const handleDelete = async (id: string) => {
		await deleteShare(share.id);
	};
</script>

<ShareCard {share}>
	<div class="card-controls">
		<Checkbox
			on:change={(event) => handleCheckbox({ emailable: event.target?.checked })}
			checked={share.emailable}
		>
			Emailable
		</Checkbox>
		<Checkbox
			on:change={(event) => handleCheckbox({ tweetable: event.target?.checked })}
			checked={share.tweetable}
		>
			Tweetable
		</Checkbox>
		<Checkbox
			on:change={(event) => handleCheckbox({ tweeted: event.target?.checked })}
			checked={share.tweeted}
		>
			Tweeted
		</Checkbox>
		<Checkbox
			on:change={(event) => handleCheckbox({ emailed: event.target?.checked })}
			checked={share.emailed}
		>
			Emailed
		</Checkbox>
	</div>
	<button class="delete" on:click={() => handleDelete(share.id)}>Delete</button>
</ShareCard>

<style>
	.card-controls {
		margin-top: var(--gap-6);
		margin-bottom: var(--gap-6);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--gap-2);
	}

	.delete {
		background-color: var(--secondary);
		color: var(--white);
	}
</style>
