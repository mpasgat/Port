<script lang="ts">
	import { onMount } from 'svelte';
	import dayjs from 'dayjs';
	import { type Comic } from '$lib/types';

	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);


	let comic: Comic | null = null;
	const email = 'a.keruly@innopolis.university';

	onMount(async () => {
		const response1 = await fetch(`https://fwd.innopolis.university/api/hw2?email=${email}`);
		const data1 = await response1.json();
		const response2 = await fetch(`https://fwd.innopolis.university/api/comic?id=${data1}`);
		comic = await response2.json();
	});

	$: formattedDate = comic
		? new Date(
				parseInt(comic.year),
				parseInt(comic.month) - 1,
				parseInt(comic.day)
			).toLocaleDateString()
		: '';
	$: fromNow = comic
		? dayjs(
				new Date(parseInt(comic.year), parseInt(comic.month) - 1, parseInt(comic.day))
			).fromNow()
		: '';
</script>

{#if comic}
	<section class="comic-section">
		<h1>{comic.safe_title}</h1>
		<img src={comic.img} alt={comic.alt} />
		<p>Date: {formattedDate} ({fromNow})</p>
	</section>
{/if}

<style>
	.comic-section {
		padding: 20px;
		background: white;
		margin-top: 20px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}
	.comic-section img {
		max-width: 100%;
		height: auto;
	}
</style>
