<template>
  <div class="w-1/3 mx-auto mt-10">
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2 border">Category Title</th>
          <th class="px-4 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(category, i) in categories" :key="i">
          <td class="border px-4 py-2">{{category.title}}</td>
          <td class="border px-4 py-2">
            <button
              class="m-1 py-1 px-4 border-2 border-black opacity-50 rounded-md"
              @click="deleteCategory(i)"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Posts",
  computed: {
    ...mapState(["categories"]),
  },
  mounted() {
    this.checkStorage();
  },
  methods: {
    ...mapActions(["deleteCategory"]),
  },
};
</script>