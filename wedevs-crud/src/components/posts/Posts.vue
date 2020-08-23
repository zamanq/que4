<template>
  <div class="w-6/12 mx-auto mt-10">
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2 border">Post Title</th>
          <th class="px-4 py-2 border">Post Categories</th>
          <th class="px-4 py-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, i) in posts" :key="i">
          <td class="border px-4 py-2">{{post.title}}</td>
          <td class="border px-4 py-2">
            <span
              class="py-1 px-2 mx-1 bg-gray-200 rounded-md"
              v-for="(category, i) in post.postcategories"
              :key="i"
            >{{category}}</span>
          </td>
          <td class="border px-4 py-2">
            <button
              class="m-1 py-1 px-4 border-2 border-black opacity-50 rounded-md"
              @click="postEdit(post)"
              @edit="editPost"
            >Edit</button>
            <button
              class="m-1 py-1 px-4 border-2 border-black opacity-50 rounded-md"
              @click="deletePost(i)"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <add-post
      v-if="editing"
      :populateWith="currentPost"
      @close="closeEditModal"
      :editing="editing"
    />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

import AddPost from "./AddPost.vue";

export default {
  name: "Posts",
  components: {
    AddPost,
  },
  data() {
    return {
      editing: false,
      currentPost: {},
    };
  },
  computed: {
    ...mapState(["posts", "categories"]),
  },
  mounted() {
    this.checkStorage();
  },
  methods: {
    ...mapActions(["deletePost"]),
    postEdit(post, i) {
      this.currentPost = JSON.parse(JSON.stringify(post));
      this.editPost(i);
    },
    editPost(post) {
      this.$emit("edit", post);
      this.editing = !this.editing;
    },
    closeEditModal() {
      this.editing = !this.editing;
    },
  },
};
</script>