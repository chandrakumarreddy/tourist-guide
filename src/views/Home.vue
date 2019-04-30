<template>
	<div class="home">
		<section class="home__introduction">
			<div class="home__intro--section">
				<h3>Best place to add your tourist experiences</h3>
				<p>
					<router-link to="/add/new" class="button is-light"
						>add your experience
					</router-link>
				</p>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "home"
};
</script>

<style>
.home__introduction {
	display: flex;
	justify-content: center;
}
.home__intro--section {
	text-align: center;
}
.home__intro--section h3 {
	margin: 10px;
}
</style>
