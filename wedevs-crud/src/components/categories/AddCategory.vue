<template>
  <div class="absolute inset-0 bg-black bg-opacity-50 mx-auto z-20">
    <form @submit.prevent="submit" class="w-1/3 mx-auto bg-white rounded px-8 pt-6 pb-8 mt-10 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="post-title">Category title</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="post-title"
          type="text"
          placeholder="Add New Category"
          v-model="category.title"
        />
      </div>
      <div class="flex items-center justify-end">
        <button
          @click="close"
          class="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 mr-3 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >Close</button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >Save</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddCategory",

  data() {
    return {
      category: {
        title: "",
      },
    };
  },
  methods: {
    close() {
      this.$emit("closecat");
    },
    clearForm() {
      this.category = {
        title: "",
      };
    },
    submit() {
      if (this.category.title !== "") {
        this.$emit("submitCat", this.category);
        this.clearForm();
        this.close();
      }
    },
  },
};
</script>