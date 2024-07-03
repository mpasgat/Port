<script lang="ts">
	import Header from '../Header.svelte';
	import Bio from '../Bio.svelte';
	import Projects from '../Projects.svelte';
	import SocialIcons from '../SocialIcons.svelte';

	const bio = {
		name: 'Asgat',
		surname: 'Keruly',
		age: 19,
		university: 'Innopolis University',
		programmingLanguages: ['Java', 'C/C++', 'Python', 'KuMir', 'HTML', 'CSS'],
		projectLink: 'https://github.com/mpasgat/Projects.git'
	};

	const projects = [
		{
			title: 'Simulation of a medieval fantasy story',
			description:
				'Written in C++ using shared pointers. This program creates characters, weapons, and spells that interact within a dynamic story. The story progresses through a series of events such as attacks, spawns, and deaths, with each event written to an output file to narrate the unfolding adventure.'
		},
		{
			title: 'Simplified Banking System',
			description:
				'Written in Java. This program is focused on creating a non-interactive system that processes a series of banking operations.'
		},
		{
			title: 'Sports Team Management System',
			description:
				'Written in C. This program handles a team of players, with each player having different attributes including their position on the field. The system allows the user to add players, delete players, display team details, and search for a specific player.'
		},
		{
			title: 'Online Book Store',
			description:
				'Written in Java. This program supports book insertion, controlling access to books, user subscriptions, and notifying users about book updates.'
		}
	];

	const socialLinks = [
		{
			id: 'gh-link',
			url: 'https://github.com/mpasgat',
			src: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
			alt: 'GitHub'
		},
		{
			id: 'tg-link',
			url: 'https://t.me/east511',
			src: 'https://cdn-icons-png.flaticon.com/512/2111/2111646.png',
			alt: 'Telegram'
		},
		{
			id: 'email',
			url: 'mailto:asgatk5@gmail.com',
			src: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
			alt: 'Email'
		}
	];
</script>

<Header title="My personal portfolio" />
<main class="container" style="width: 70%; margin: auto; overflow: hidden;">
	<Bio {...bio} />
	<Projects {projects} />
	<SocialIcons links={socialLinks} />
</main>
