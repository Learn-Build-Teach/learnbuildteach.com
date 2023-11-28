<script lang="ts">
	import ShareCard from '$components/shares/shareCard.svelte';
	import Checkbox from '$components/checkbox.svelte';
	import { deleteShare, getCoverPublicURL, updateShare } from '$stores/sharesStore';
	import type { Share } from '$src/types/supabase';

	export let share: Share;
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
	<div class="my-8 grid grid-cols-2 gap-2">
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
	<button class="bg-secondary text-white w-full rounded text-lg p-2" on:click={() => handleDelete(share.id)}>Delete</button>
</ShareCard>
