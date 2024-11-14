<script lang="ts">
	import '../app.css';
	import { MaterialApp } from 'svelte-materialify';
	import Nav from '../components/Nav.svelte';
	import { writable } from 'svelte/store';
	
	const theme = writable('light')

	export function toggleTheme() {
		$theme === 'light' ? theme.set('dark') : theme.set('light')
	}

	let { children } = $props();
</script>

<MaterialApp theme={$theme}>
	<div class="flex">
		<Nav {toggleTheme} />
		<div class="p-4 w-full">
			{@render children()}
		</div>
	</div>
</MaterialApp>	
