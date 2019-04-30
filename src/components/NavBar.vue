<template>
	<div id="navBar">
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<router-link class="navbar-item" to="/">
					<span class="logo">Tourist Guide</span>
				</router-link>

				<a
					role="button"
					class="navbar-burger burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="navbarBasicExample" class="navbar-menu">
				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<router-link class="button is-primary" to="/signup">
								<strong>Sign up</strong>
							</router-link>
							<router-link class="button is-light" to="/login">
								Log in
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<style>
.logo {
	text-transform: uppercase;
	font-size: 30px;
	font-weight: bold;
	color: cornflowerblue;
}
</style>
