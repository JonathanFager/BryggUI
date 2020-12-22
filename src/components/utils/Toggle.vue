<template>
  <div
    class="flex justify-between items-center"
    @click="toggleRight()"
  >
    <div
      class="w-10 h-6 flex items-center rounded-full p-1 border-2 border-green-600 duration-300 ease-in-out"
      :class="{ 'bg-green-600': isRight }"
    >
      <div
        class="w-4 h-4 bg-white rounded-full shadow-lg transform duration-300 ease-in-out"
        :class="{
          'translate-x-4': isRight,
          'bg-gray-400 dark:bg-gray-100': !isRight,
        }"
      ></div>
    </div>
  </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

@Options({
  emits: ["toggle-right"],
})
export default class Toggle extends Vue {
  @Prop({ default: false }) isRight = false;

  @Emit() 
  private toggleRight(): boolean {
    return !this.isRight;
  }

}
</script>