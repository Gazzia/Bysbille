<script>
	import Nav from "../component/Nav.svelte";
	import Chat from "../component/Chat.svelte";
	import Connect from "../component/Connect.svelte";
	import SalonList from "../component/SalonList.svelte";
	import ListUsers from "../component/ListUsers.svelte";
	let servers = [
		{
			name: "Simplon",
			img: "../assets/img/Simplon.jpg",
			id: 1,
			salons: [
				{name: "blabla", id: 1},
				{name: "Mordor", id: 2},
			],
		},
		{name: "Nain dansant", id: 2, salons: [{name: "Franck best client", id: 1}]},
	];
	let openedServer = false;
	let openedSalon = false;

	let connected = true;
</script>

<style>
	.grid {
		display: grid;
		grid-template-columns: 5rem 20rem 1fr 20rem;
		height: 100vh;
		overflow: hidden;
	}
</style>

{#if connected}
	<div class="grid">
		<Nav {servers} bind:openedServer />
		<SalonList {openedServer} bind:openedSalon />
		<Chat bind:openedSalon />
		<ListUsers bind:openedSalon />
	</div>
{:else}
	<Connect />
{/if}
