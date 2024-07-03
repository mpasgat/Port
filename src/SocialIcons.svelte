<script lang="ts">
	export let links: { id: string; url: string; src: string; alt: string }[];
</script>

<section class="social-icons" style="text-align: center; margin-top: 20px;">
	<h3>Contacts</h3>
	{#each links as { id, url, src, alt }}
		<a {id} href={url}><img {src} width="30" height="30" {alt} /></a>
	{/each}
</section>

<style>
	a {
		margin: 20px;
	}
</style>
