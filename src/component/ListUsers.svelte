<script>
</script>

<style>
	.footer {
		background: #2e3036;
	}
	.footer__container {
		display: grid;
		grid-template-rows: 5rem 1fr;
	}
	.footer__settings {
		background: #36383e;
	}
	.footer__friends {
		padding: 1rem;
	}
	.footer .avatar__status {
		min-height: 0.75rem;
		min-width: 0.75rem;
	}
	.footer .user__name {
		color: rgba(240, 244, 255, 0.75);
	}

	.footer__settings {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 1rem;
	}

	.settings__group {
		display: flex;
		flex-direction: row;
	}

	.group__setting {
		background: #4e5159;
		border-radius: 50%;
		min-height: 1rem;
		min-width: 1rem;
	}
	.group__setting:not(:last-child) {
		margin-right: 1rem;
	}

	.settings__search {
		position: relative;
	}

	.search__input {
		background: #4e5159;
		border-radius: 0.25rem;
		font: normal 1rem/100% "acumin-pro", sans-serif;
		height: 2rem;
		padding: 0 0.5rem;
	}

	.friend {
		display: flex;
		align-items: center;
	}
	.friend:not(:last-child) {
		margin-bottom: 1rem;
	}

	.friend__category {
		color: rgba(240, 244, 255, 0.25);
		margin-bottom: 1rem;
	}

	.friend__avatar {
		background: rgba(255, 255, 255, 0.1);
		border-radius: 50%;
		min-height: 2rem;
		min-width: 2rem;
		margin-right: 1rem;
	}

	.footer__friends .user__name:hover {
		color: #f0f4ff;
	}
</style>

<div class="footer">
	<div class="footer__container">
		<div class="footer__settings">
			<div class="settings__group">
				<div class="group__setting" />
				<div class="group__setting" />
				<div class="group__setting" />
			</div>
			<input type="text" class="search__input" />
		</div>
		<div class="footer__friends">
			<div class="friend__category">Connecter</div>
			<div class="friend">
				<div class="friend__avatar">
					<div class="avatar__status" />
				</div>
				<div class="friend__user">
					<div class="user__name">HamzaDams</div>
				</div>
			</div>
		</div>
	</div>
</div>
