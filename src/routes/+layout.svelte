
<script lang="ts">
	import {base} from '$app/paths';
</script>

<header>
	<nav>
		<a href="{base}/">Home</a>
		<a href="{base}/Comic">Comic</a>
	</nav>
</header>

<main>
	<slot/>
</main>

<footer>
	<p>&copy; 2024 Asgat Keruly</p>
</footer>