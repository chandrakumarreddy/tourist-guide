<template>
	<div class="home">
		<section class="home__introduction">
			<div class="home__intro--section">
				<h1>Best place to add your trip experiences</h1>
				<p>
					<router-link to="/add/new" class="button is-link ">
						Add your experience
					</router-link>
				</p>
			</div>
		</section>
	</div>
</template>

<script>
import api from "@/api";

export default {
	name: "home",
	created() {
		api.getAll().then(data => console.log(data));
	}
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
.home__intro--section h1 {
	margin: 10px;
}
</style>
