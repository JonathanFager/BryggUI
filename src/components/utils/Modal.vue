<template>
  <div v-if="isVisible">
    <div class="fixed inset-0 z-50 flex justify-center items-center">
      <div class="flex flex-col max-w-5xl rounded-lg shadow-lg bg-white dark:bg-gray-800">
        <div class="p-5">
          <div class="flex justify-between items-start">
            <h3 class="text-xl font-semibold">Modal Header</h3>
            <button class="p-1 leading-none" @click="emitCancel()">X</button>
          </div>
          <div class="p-6">
            <p class="">body content here</p>
          </div>
          <div class="p-6 flex justify-end items-center">
            <button class="" @click="emitCancel">Cancel</button>
            <button class="" @click="emitConfirm">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <div class="opacity-40 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

export default class Modal extends Vue {
  @Prop() isVisible!: boolean;

  emitCancel() {
    this.$emit("cancel");
  }

  emitConfirm() {
    this.$emit("confirm");
  }
}
</script>