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
		<section class="trips" v-if="trips">
			<div class="card" v-for="trip in trips" :key="trip.id">
				<div class="card-image">
					<figure class="image is-4by3">
						<img :src="trip.image" :alt="trip.name" />
					</figure>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import api from "@/api";

export default {
	name: "home",
	data() {
		return {
			trips: []
		};
	},
	created() {
		api.getAll().then(snapshot => {
			snapshot.forEach(doc => {
				let trip = doc.data();
				trip.id = doc.id;
				this.trips.push(trip);
			});
		});
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
.trips {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 20px;
}
</style>
