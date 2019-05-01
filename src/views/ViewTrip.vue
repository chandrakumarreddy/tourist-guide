<template>
	<div id="ViewTrip">
		<div class="ViewTrip__flex">
			<div class="ViewTrip__flex--5">
				<figure class="image">
					<img :src="trip.image" />
				</figure>
			</div>
			<div class="ViewTrip__flex--7">
				<div>{{ trip.name }}</div>
				<div>{{ trip.description }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import api from "@/api";

export default {
	data() {
		return {
			tripId: "",
			trip: {}
		};
	},
	methods: {
		updateId() {
			this.tripId = this.$route.params;
		}
	},
	created() {
		api.getTrip(this.$route.params._id).then(trip => {
			this.trip = trip.data();
		});
	},
	watch: {
		$route: "updateId"
	}
};
</script>

<style>
.ViewTrip__flex {
	display: flex;
}
.ViewTrip__flex--5 {
	flex: 5;
	padding: 0 20px;
}
.ViewTrip__flex--7 {
	flex: 7;
	padding: 0 20px;
}
</style>
