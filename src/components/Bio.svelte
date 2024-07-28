<script lang="ts">
	export let name: string;
	export let surname: string;
	export let age: number;
	export let university: string;
	export let programmingLanguages: string[];
	export let projectLink: string;
</script>

<section
	class="bio"
	style="padding: 20px; background: white; margin-top: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 10px;"
>
	<h2>About Me</h2>
	<p>
		Hello! My name is {name} and surname is {surname}. I am {age} years old. I am currently studying
		in {university}
		at the first course. I have experience in programming languages such as {programmingLanguages.join(
			', '
		)}. I have done some <a class="project-link" href={projectLink}>projects</a> that deals with
		different difficult tasks. To put a smile on your face, you can enjoy with some comic
		<button on:click={() => window.open('/Port/Comic')}>click</button>.
	</p>
</section>
