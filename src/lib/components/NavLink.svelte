<script lang="ts">
	import { page } from '$app/stores';

	export let path = '';
	export let name = '';
</script>

<li class="relative group">
	<a class={`block relative border-none `} data-sveltekit-preload-data href={path}>{name}</a>
	<span
		class={`absolute bottom-0 left-1 right-1 h-0.5 rounded-sm bg-slate-200 block transition-transform ${
			$page.url.pathname === path ? 'scale-x-100' : 'scale-x-0'
		} group-hover:scale-x-100`}
	/>
</li>
