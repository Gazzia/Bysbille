<script>
	export let servers;
	export let openedServer;
	function openServer(server) {
		openedServer = server;
	}
</script>

<style>
	nav {
		background: #202224;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding: 30px 18px;
		box-sizing: border-box;
		gap: 15px;
	}
	.server {
		width: 100%;
		flex: 0 0 auto;
		height: 45px;
		cursor: pointer;
	}
	.image:hover,
	.opened.server .image {
		border-radius: 10px;
	}
	.image {
		overflow: hidden;
		width: 100%;
		border-radius: 50%;
		flex: 0 0 auto;
		height: 100%;
		transition: 0.2s;
	}
	.image img {
		width: 100%;
		height: 100%;
	}
</style>

<nav>
	{#each servers as server}
		<div
			class="server"
			class:opened={openedServer && openedServer.id == server.id}
			on:click={() => {
				openServer(server);
			}}>
			<div class="image"><img src={server.img || '../assets/img/default.png'} alt="" /></div>
		</div>
	{/each}
</nav>
