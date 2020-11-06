<script>
	export let openedServer;
	export let openedSalon;

	function openSalon(salon) {
		openedSalon = salon;
	}
</script>

<style>
	.salons {
		display: grid;
		grid-template-rows: 5rem 1fr 5rem;
		height: 100%;
		background-color: #2e3036;
	}
	.header {
		display: flex;
		align-items: center;
		padding: 15px;
		border-bottom: 1px solid #202224;
	}
	.label {
		margin-bottom: 10px;
	}
	.list {
		display: flex;
		flex-direction: column;

		width: 100%;
		padding: 15px 20px;
		box-sizing: border-box;
	}
	.salon {
		padding: 8px 6px;
		width: 100%;
		padding-left: 20px;
		cursor: pointer;
		box-sizing: border-box;
		border-radius: 6px;
	}
	.salon.opened,
	.salon:hover {
		background: rgba(240, 244, 255, 0.05);
		color: #f0f4ff;
	}
</style>

<div class="salons">
	{#if openedServer}
		<div class="header">
			<div class="serverName">{openedServer.name}</div>
		</div>
		<div class="list">
			<div class="label">Text channels</div>
			{#each openedServer.salons as salon}
				<div
					class="salon"
					class:opened={openedSalon && openedSalon.id == salon.id}
					on:click={() => {
						openSalon(salon);
					}}>
					{salon.name}
				</div>
			{/each}
		</div>
	{/if}
</div>
