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
		<section class="trips" v-if="trips.length > 0">
			<div class="card" v-for="trip in trips" :key="trip.id">
				<div class="card-image">
					<router-link
						:to="{ name: 'trip', params: { _id: trip.id } }"
					>
						<figure class="image is-4by3 card__custom--image">
							<img :src="trip.image" :alt="trip.name" />
						</figure>
					</router-link>
				</div>
			</div>
		</section>
		<section v-else>
			<div class="pageloader">
				<span class="title">Loading......</span>
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
	margin-bottom: 30px;
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
.card__custom--image {
	cursor: pointer;
}
.card__custom--image img {
	border-radius: 6px;
}
.pageloader {
	text-align: center;
	margin: 20px 0;
}
</style>
