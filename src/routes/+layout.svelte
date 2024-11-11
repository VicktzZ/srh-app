<script lang="ts">
	import { MaterialApp } from 'svelte-materialify';
	import '../app.css';
	import Nav from '../components/Nav.svelte';

	// svelte-ignore non_reactive_update
	let theme = $state('light');

	export function toggleTheme() {
		if (theme === 'light') theme = 'dark';
		else theme = 'light';
	}

	let { children } = $props();
</script>

<MaterialApp {theme}>
	<div class="flex">
		<Nav {toggleTheme} />
		<div class="p-4 w-full">
			{@render children()}
		</div>
	</div>
</MaterialApp>
