<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-purple-900 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-bold text-xl tracking-tight">weDevs CRUD</span>
      </div>
      <div class="block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-100 mr-4"
          >Posts</a>
          <a
            href="#responsive-header"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-100 mr-4"
          >Categories</a>
        </div>
        <div>
          <a
            @click="toggleModal"
            href="#"
            class="inline-block text-sm px-4 py-2 mr-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-900 hover:bg-white mt-4 lg:mt-0"
          >Add New Post</a>
          <a
            @click="toggleCatModal"
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-900 hover:bg-white mt-4 lg:mt-0"
          >Add New Category</a>
        </div>
      </div>
    </nav>
    <add-post v-show="showModal" @close="toggleModal" @submit="addPost" />
    <add-category v-show="showCatModal" @closecat="toggleCatModal" @submit="AddCategory" />
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