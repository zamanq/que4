<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-purple-900 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-bold text-xl tracking-tight">
          <router-link to="/">weDevs CRUD</router-link>
        </span>
      </div>
      <div class="block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <router-link
            to="/posts"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-100 mr-4"
          >Posts</router-link>
          <router-link
            to="/categories"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-100 mr-4"
          >Categories</router-link>
        </div>
        <div>
          <button
            @click="toggleModal"
            class="inline-block text-sm px-4 py-2 mr-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-900 hover:bg-white mt-4 lg:mt-0"
          >Add New Post</button>
          <button
            @click="toggleCatModal"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-900 hover:bg-white mt-4 lg:mt-0"
          >Add New Category</button>
        </div>
      </div>
    </nav>
    <add-post
      v-show="showModal"
      @close="toggleModal"
      @edit="editPost"
      @submit="addPost"
      :closecat="toggleCatModal"
      :submitCat="addCategory"
      :showCatModal="showCatModal"
    />
    <add-category v-show="showCatModal" @closecat="toggleCatModal" @submitCat="addCategory" />
    <router-view />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

import AddPost from "./posts/AddPost.vue";
import AddCategory from "./categories/AddCategory.vue";

export default {
  name: "Home",
  components: {
    AddPost,
    AddCategory,
  },
  data() {
    return {
      showModal: false,
      showCatModal: false,
    };
  },
  computed: {
    ...mapState(["posts", "categories"]),
  },
  mounted() {
    this.checkStorage();
  },
  methods: {
    ...mapActions([
      "addPost",
      "editPost",
      "addCategory",
      "deletePost",
      "deleteCategory",
      "checkStorage",
      "savePosts",
    ]),
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleCatModal() {
      this.showCatModal = !this.showCatModal;
    },
  },
};
</script>