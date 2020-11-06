<script>
	export let openedSalon;
</script>

<style>
	.chat {
		background: #36383e;
	}

	.chat_main {
		height: calc(100vh - 10rem);
		overflow-y: scroll;
		padding: 1rem;
	}

	.chat_post {
		display: flex;
		align-items: flex-start;
		position: relative;
	}

	.chat_avatar {
		background: #7288da;
		border-radius: 50%;
		min-height: 3rem;
		min-width: 3rem;
		margin-right: 1rem;
	}

	.chat_name {
		display: inline;
	}

	.chat_name:hover {
		text-decoration: underline;
	}

	.chat_datePosted {
		color: rgba(240, 244, 255, 0.25);
		display: inline;
		font-size: 0.75rem;
	}

	.chat_message {
		color: rgba(240, 244, 255, 0.75);
		word-break: break-word;
	}

	.input_container {
		display: flex;
		align-items: center;
		background: #42444c;
		height: 100%;
		padding: 0 1rem;
	}

	.input__message {
		font: normal 1.25rem/100% "acumin-pro", sans-serif;
		width: 100%;
	}

	.header_title {
		box-sizing: border-box;
		padding: 0 20px;
	}
</style>

<div class="chat">
	{#if openedSalon}
		<div class="chat_container">
			<div class="chat_channel">
				<div class="header_title">
					<h1>{openedSalon.name}</h1>
				</div>
			</div>
			<div class="chat_main">
				<div class="chat_post">
					<div class="chat_avatar" />
					<div class="chat_content">
						<div class="chat_name">Hamza</div>

						<div class="chat_datePosted">14-06-1997</div>

						<div class="chat_message">Ceci est un message</div>
					</div>
				</div>
			</div>
			<div class="chat_input">
				<div class="input_container">
					<input type="text" placeholder="Entrer message" class="input__message" />
				</div>
			</div>
		</div>
	{/if}
</div>
