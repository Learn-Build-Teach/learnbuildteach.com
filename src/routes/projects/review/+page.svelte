<script lang="ts">
	// Will be a protected route for admin only.
	// Fetching projects with status "pending" from the database.
	// If project rejected, it will be deleted from the database.
</script>

<main class="container md:mx-auto mt-8 px-4 flex flex-col gap-y-12 items-start justify-start">
	<h1 class="text-4xl">Projects submitted by members that need review:</h1>
	<div class="flex items-center justify-start gap-x-8 w-full">
		<div class="h-full w-48 block">
			<img
				src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
				alt="Project image"
				class="object-cover h-full"
			/>
		</div>
		<div class="flex-1">
			<h2 class="text-2xl font-bold">Easy CSV</h2>
			<p>A web application that display your csv data into a table.</p>
			<p class="text-slate-300">Author</p>
			<div class="flex items-center justify-start gap-x-4">
				<!-- Approve will update the status of the project to "approved" -->
				<button class="py-1 px-2 bg-slate-300 text-primary rounded-md mt-4">Approve</button>
				<!-- Reject will delete project from the database -->
				<button class="py-1 px-2 bg-secondary text-white rounded-md mt-4">Reject</button>
			</div>
		</div>
	</div>
	<div class="flex items-center justify-start gap-x-8 w-full">
		<div class="h-full w-48 block">
			<img
				src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
				alt="Project image"
				class="object-cover h-full"
			/>
		</div>
		<div class="flex-1">
			<h2 class="text-2xl font-bold">Easy CSV</h2>
			<p>A web application that display your csv data into a table.</p>
			<p class="text-slate-300">Author</p>
			<div class="flex items-center justify-start gap-x-4">
				<!-- Approve will update the status of the project to "approved" -->
				<button class="py-1 px-2 bg-slate-300 text-primary rounded-md mt-4">Approve</button>
				<!-- Reject will delete project from the database -->
				<button class="py-1 px-2 bg-secondary text-white rounded-md mt-4">Reject</button>
			</div>
		</div>
	</div>
	<div class="flex items-center justify-start gap-x-8 w-full">
		<div class="h-full w-48 block">
			<img
				src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
				alt="Project image"
				class="object-cover h-full"
			/>
		</div>
		<div class="flex-1">
			<h2 class="text-2xl font-bold">Easy CSV</h2>
			<p>A web application that display your csv data into a table.</p>
			<p class="text-slate-300">Author</p>
			<div class="flex items-center justify-start gap-x-4">
				<!-- Approve will update the status of the project to "approved" -->
				<button class="py-1 px-2 bg-slate-300 text-primary rounded-md mt-4">Approve</button>
				<!-- Reject will delete project from the database -->
				<button class="py-1 px-2 bg-secondary text-white rounded-md mt-4">Reject</button>
			</div>
		</div>
	</div>
	<div class="flex items-center justify-start gap-x-8 w-full">
		<div class="h-full w-48 block">
			<img
				src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
				alt="Project image"
				class="object-cover h-full"
			/>
		</div>
		<div class="flex-1">
			<h2 class="text-2xl font-bold">Easy CSV</h2>
			<p>A web application that display your csv data into a table.</p>
			<p class="text-slate-300">Author</p>
			<div class="flex items-center justify-start gap-x-4">
				<!-- Approve will update the status of the project to "approved" -->
				<button class="py-1 px-2 bg-slate-300 text-primary rounded-md mt-4">Approve</button>
				<!-- Reject will delete project from the database -->
				<button class="py-1 px-2 bg-secondary text-white rounded-md mt-4">Reject</button>
			</div>
		</div>
	</div>
</main>
