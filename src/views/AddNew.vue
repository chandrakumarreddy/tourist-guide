<template>
	<div id="add">
		<h1>Please share your trip details</h1>
		<form @submit.prevent="newTrip">
			<div class="control add__control">
				<input
					class="input is-focused"
					type="text"
					placeholder="Trip place"
					v-model="name"
					required
				/>
			</div>
			<div class="control add__control">
				<input
					class="input is-focused"
					type="text"
					placeholder="Trip image"
					v-model="image"
					required
				/>
			</div>
			<div class="control add__control">
				<textarea
					class="textarea is-focused"
					placeholder="e.g. Hello world"
					v-model="description"
					required
				></textarea>
			</div>
			<div class="control add__control">
				<button class="button is-info" :style="{ width: '100%' }">
					submit
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import api from "@/api";

export default {
	data() {
		return {
			name: "",
			image: "",
			description: ""
		};
	},
	methods: {
		newTrip() {
			api.addTrip(this.name, this.image, this.description)
				.then(() => this.$router.push({ name: "home" }))
				.catch(() => this.$router.push({ name: "add-trip" }));
		}
	}
};
</script>

<style>
#add {
	padding: 15px;
	max-width: 500px;
	margin: 0 auto;
}

#add h1 {
	text-align: center;
	margin: 20px 0;
}

.add__control {
	margin: 20px 0 !important;
}
</style>
