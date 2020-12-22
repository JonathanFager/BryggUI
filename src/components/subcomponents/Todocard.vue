<template>
  <Modal
    :isVisible="modalVisible"
    @cancel="modalVisible = false"
    @confirm="modalVisible = false"
  />
  <div
    @click="modalVisible = true"
    class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 w-94 flex-1 items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
  >
    <span v-if="completed" class="text-green-600"
      ><svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path></svg
    ></span>
    <span v-else class="text-gray-400"
      ><svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.75"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 "
          clip-rule="evenodd"
        ></path></svg
    ></span>
    <span class="font-semibold">Todo 1</span>
    <p class="text-sm">Card body text</p>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
import Modal from "../../components/utils/Modal.vue";

@Options({
  components: {
    Modal,
  },
})

/*
@Options({
  emits: ["completed"],
})
*/
export default class Todocard extends Vue {
  /*   @Prop({ default: false }) completed = true;

  @Emit()
  private toggleCompleted(): boolean {
    return !this.completed;
  }
  */
  private completed = false;

  private modalVisible = false;

  private toggleCompleted(): void {
    this.completed = !this.completed;
  }
}
</script>