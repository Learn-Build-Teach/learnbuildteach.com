<script lang="ts">
	// Projects submitted here will have a default status of "pending" to be reviewed by admin
</script>

<main class="flex flex-col align-center justify-center h-screen">
	<div class="text-left mb-6 w-[50%] mx-auto">
		<h1 class="text-4xl font-bold">Submit your project.</h1>
		<p class="text-slate-300">Note: will be reviewed before being published on the website.</p>
	</div>
	<form method="POST" class="w-[50%] mx-auto">
		<div class="flex flex-col align-center mb-6 gap-y-1">
			<label for="title" class="font-bold text-slate-300">Title:</label>
			<input
				name="title"
				type="text"
				class="w-[90%] py-2 px-3 rounded-md opacity-90"
				placeholder="Title"
			/>
		</div>
		<div class="flex flex-col align-start mb-6 gap-y-1">
			<label for="cover_image" class="font-bold text-slate-300">Cover Image:</label>
			<input name="cover_image" type="file" />
		</div>
		<div class="flex flex-col align-start mb-6 gap-y-1">
			<label for="description" class="font-bold text-slate-300">Description:</label>
			<textarea
				name="description"
				class="py-2 px-3 rounded-md opacity-90 w-[90%]"
				placeholder="Description"
			/>
		</div>
		<div class="flex flex-col align-start mb-6 gap-y-1">
			<label for="author" class="font-bold text-slate-300">Discord username: (Optional)</label>
			<input
				name="author"
				type="text"
				class="w-[90%] py-2 px-3 rounded-md opacity-90"
				placeholder="Discord username"
			/>
		</div>
		<div class="flex flex-col align-start mb-6 gap-y-1">
			<label for="site_url" class="font-bold text-slate-300">Site URL:</label>
			<input
				name="site_url"
				type="text"
				class="w-[90%] py-2 px-3 rounded-md opacity-90"
				placeholder="https://example.com"
			/>
		</div>
		<div class="flex flex-col align-start mb-6 gap-y-1">
			<label for="repo_url" class="font-bold text-slate-300">Repository URL:</label>
			<input
				name="repo_url"
				type="text"
				class="w-[90%] py-2 px-3 rounded-md opacity-90"
				placeholder="https://github.com/username/myrepo"
			/>
		</div>
		<button
			class="rounded-md bg-primary text-white border border-primary hover:bg-secondary hover:font-bold mt-4 py-2 px-3 w-[40%] transition-all ease-out duration-500"
			>Submit</button
		>
	</form>
</main>
