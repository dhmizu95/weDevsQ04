<template>
	<div>
		<b-button block id="show-btn" @click="$bvModal.show('bv-modal-example2')"
			>Create New Category</b-button
		>

		<b-modal id="bv-modal-example2" hide-footer>
			<template v-slot:modal-title>
				<span class="text-center">Insert Category</span>
			</template>
			<div class="d-block">
				<form class="form" v-on:submit.prevent="onSubmit">
					<div class="form-group">
						<label for="categoryName">Name:</label>
						<input
							v-model="categoryName"
							type="text"
							class="form-control"
							id="categoryName"
							required
						/>
					</div>

					<div class="ml-auto text-right">
						<button
							type="submit"
							class="btn btn-primary my-3"
							@click="$bvModal.hide('bv-modal-example2')"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</b-modal>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'InsertCategory',
	methods: {
		...mapActions(['addCategories']),
		onSubmit() {
			this.addCategories(this.categoryName);
		},
	},
	data() {
		return {
			categoryName: '',
		};
	},
};
</script>

<style></style>
