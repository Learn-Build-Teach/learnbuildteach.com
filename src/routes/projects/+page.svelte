<script lang="ts">
	// Fetching projects with status "accepted" from the database, after admin review.
</script>

<article class="flex flex-col gap-y-8 align-start justify-start">
	<h1 class="text-5xl text-center">
		Here are the amazing projects built by the community members!
	</h1>

	<!-- Creating a button to add your own project -->
	<a href="/projects/submit" class="mx-auto">
		<button
			class="rounded-md border border-white py-2 px-3 hover:font-bold hover:border-secondary transition-all ease-out duration-500"
			><span class="text-xl font-bold mr-1">+</span>Add your own project</button
		></a
	>

	<!-- Creating a grid to display the projects that need to be reviewd-->
	<section class="grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 gap-x-8 gap-y-8 my-8">
		<div
			class="flex flex-col align-start justify-start hover:scale-105 border border-primary hover:border hover:border-secondary rounded-md transition-all ease-out duration-500"
		>
			<div class="w-full h-full rounded-t-md block">
				<img
					src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
					alt="Project Image"
					class="object-cover"
				/>
			</div>
			<div
				class="py-4 px-3 flex flex-col align-start justify-start bg-primary gap-y-2 rounded-b-md"
			>
				<h1 class="font-bold text-xl">Easy CSV</h1>
				<p class="font-light text-slate-300">Christophe Anfry</p>
				<p>A web application that display your csv data into a table.</p>
				<div class="flex align-center justify-between">
					<a href="#" class="hover:text-secondary text-slate-300">Project ></a>
					<a href="#" class="hover:text-secondary text-slate-300">Source code ></a>
				</div>
			</div>
		</div>
		<div class="flex flex-col align-start justify-start border border-white rounded-md">
			<div class="w-full h-full rounded-t-md block">
				<img
					src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
					alt="Project Image"
					class="object-cover"
				/>
			</div>
			<div class="py-4 px-3 flex flex-col align-start justify-start gap-y-2">
				<h1 class="font-bold text-xl">Project Name</h1>
				<p class="font-light text-gray-100">Author</p>
				<p>Project Description</p>
				<div class="flex align-center justify-between">
					<a href="#">Project</a>
					<a href="#">Source code</a>
				</div>
			</div>
		</div>
		<div class="flex flex-col align-start justify-start border border-white rounded-md">
			<div class="w-full h-full rounded-t-md block">
				<img
					src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
					alt="Project Image"
					class="object-cover"
				/>
			</div>
			<div class="py-4 px-3 flex flex-col align-start justify-start gap-y-2">
				<h1 class="font-bold text-xl">Project Name</h1>
				<p class="font-light text-gray-100">Author</p>
				<p>Project Description</p>
				<div class="flex align-center justify-between">
					<a href="#">Project</a>
					<a href="#">Source code</a>
				</div>
			</div>
		</div>
		<div class="flex flex-col align-start justify-start border border-white rounded-md">
			<div class="w-full h-full rounded-t-md block">
				<img
					src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
					alt="Project Image"
					class="object-cover"
				/>
			</div>
			<div class="py-4 px-3 flex flex-col align-start justify-start gap-y-2">
				<h1 class="font-bold text-xl">Project Name</h1>
				<p class="font-light text-gray-100">Author</p>
				<p>Project Description</p>
				<div class="flex align-center justify-between">
					<a href="#">Project</a>
					<a href="#">Source code</a>
				</div>
			</div>
		</div>
	</section>
</article>
