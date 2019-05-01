import db from "../firebase/init";

export default {
	getAll() {
		return db
			.collection("trips")
			.get()
			.then(snapshots => snapshots)
			.catch(err => err);
	},
	addTrip(name, image, description) {
		return db.collection("trips").add({
			name,
			image,
			description
		});
	},
	getTrip(id) {
		return db
			.collection("trips")
			.doc(id)
			.get();
	}
};
