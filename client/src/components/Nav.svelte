<script lang="ts">
	import { mdiCog, mdiHome, mdiPoll, mdiPrinter, mdiBrightness6 } from "@mdi/js";
	import { Button, Icon } from "svelte-materialify";
    import { goto } from "$app/navigation";

    export let toggleTheme: () => void
</script>

<div class="nav-wrapper">
    <div class="flex flex-col gap-8">
        <Button on:click={() => goto('/')} fab size="small">
            <Icon path={mdiHome}></Icon>
        </Button>
        <Button on:click={() => goto('/metrics')} fab size="small">
            <Icon path={mdiPoll}></Icon>
        </Button>
        <Button on:click={() => goto('/printers')} fab size="small">
            <Icon path={mdiPrinter}></Icon>
        </Button>
    </div>
    <div class="flex gap-4 flex-col">
        <Button on:click={() => toggleTheme()} fab size="small">
            <Icon path={mdiBrightness6}></Icon>
        </Button>
        <Button on:click={() => goto('/settings')} fab size="small">
            <Icon path={mdiCog}></Icon>
        </Button>
    </div>
</div>

<style>
    .nav-wrapper {
        @apply h-screen w-20 bg-slate-500 flex flex-col items-center p-4 justify-between
    }
</style>