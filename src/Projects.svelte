<script lang="ts">
	export let projects: { title: string; description: string }[];
</script>

<section
	class="projects"
	style="padding: 20px; background: white; margin-top: 20px; box-shadow: 0 0 10px
	 rgba(0, 0, 0, 0.1); border-radius: 10px;"
>
	<h2>Projects</h2>
	<ul>
		{#each projects as { title, description }}
			<li>
				<strong>{title}:</strong>
				{description}
			</li>
		{/each}
	</ul>
</section>
