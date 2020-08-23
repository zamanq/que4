<template>
  <div class="absolute inset-0 bg-black bg-opacity-50 mx-auto z-10">
    <form @submit.prevent="submit" class="w-1/3 mx-auto bg-white rounded px-8 pt-6 pb-8 mt-10 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="post-title">Post title</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="post-title"
          type="text"
          placeholder="Post title"
          v-model="post.title"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="categories">Categories</label>
        <select
          v-on:change="triggerModal($event)"
          v-model="post.postcategories"
          multiple
          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="categories"
        >
          <option value="new-cat">Create New Category</option>
          <option v-for="(category, i) in categories" :key="i">{{category.title}}</option>
        </select>
      </div>
      <div class="flex items-center justify-end">
        <button
          @click="close"
          class="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 mr-3 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >Close</button>
        <button
          v-if="editing"
          @click="editPost"
          type="button"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >Update</button>
        <button
          v-else
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >Save</button>
      </div>
    </form>
    <add-category v-show="showCatModal" @closecat="toggleCat" @submitCat="addCategory" />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

import AddCategory from "../categories/AddCategory.vue";

export default {
  name: "AddPost",
  components: {
    AddCategory,
  },
  props: {
    populateWith: {
      type: Object,
      default: () => ({ empty: true }),
    },
    editing: {
      type: Boolean,
    },
    showCatModal: {
      type: Boolean,
    },
    closecat: {
      type: Function,
    },
    submitCat: {
      type: Function,
    },
  },
  data() {
    if (!this.populateWith.empty) {
      return {
        post: this.populateWith,
      };
    } else {
      return {
        post: {
          title: "",
          postcategories: [],
        },
      };
    }
  },
  computed: {
    ...mapState(["categories"]),
  },
  methods: {
    ...mapActions(["addCategory"]),
    close() {
      this.$emit("close");
    },
    clearForm() {
      this.post = {
        title: "",
      };
    },
    submit() {
      if (this.post.title !== "") {
        this.$emit("submit", this.post);
        this.clearForm();
        this.close();
      }
    },
    editPost() {
      this.$emit("edit", this.post);
      this.close();
    },
    triggerModal(event) {
      if (event.target.value === "new-cat") {
        this.showCatModal = !this.showCatModal;
      }
    },
    toggleCat() {
      this.showCatModal = !this.showCatModal;
    },
  },
};
</script>