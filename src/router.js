import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/add/new",
			name: "add-trip",
			component: () => import("./views/AddNew.vue")
		},
		{
			path: "/trip/:_id",
			name: "trip",
			component: () => import("./views/ViewTrip.vue")
		}
	]
});
