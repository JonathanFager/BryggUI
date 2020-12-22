<template>
  <content
    id="sensorCard"
    class="rounded-lg space-y-4 border-2 dark:bg-blue-gray-800 p-2 min-h-20 flex flex-col"
    :class="{
      'col-span-full': fullWidth,
      'col-span-1': !fullwidth,
      'bg-blue-gray-100 border-transparent': issue === undefined,
      'bg-blue-gray-100 border-transparent': issue === 1,
      'bg-yellow-100 border-yellow-400': issue === 2,
      'bg-red-100 border-red-600': issue === 3,
    }"
  >
    <div class="flex flex-row justify-between w-full">
      <span class="font-semibold text-sm">Mash Heater</span>
      <div
        :class="{
          'text-green-600': issue === undefined,
          'text-green-600': issue === 1,
          'text-yellow-600': issue === 2,
          'text-red-600': issue === 3,
        }"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- error -->
          <path
            v-if="issue === 3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
          <!-- Issue -->
          <path
            v-else-if="issue === 2"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
          <!-- Ok -->
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
    </div>
    <div
      id="Main Sensor Value"
      class="flex flex-row justify-center items-center"
    >
      <div id="icon" class="pr-2 animate-pulse text-green-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-7 w-7"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      </div>
      <div class="flex text-3xl font-bold">
        <span class="">50%</span>
      </div>
    </div>
    <div class="flex flex-row space-x-4 items-center">
      <span class="text-xs font-semibold">Enable actor:</span>
      <Toggle :isRight="toggleRight" @toggleRight="setToggleRight($event)" />
    </div>
  </content>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
import Toggle from "../../components/utils/Toggle.vue";
import store from "@/store";

@Options({
  components: {
    Toggle,
  },
})
export default class Actorrcard extends Vue {
  //@Prop() fullWidth!: boolean;
  // @Prop() issue!: number;

  private issue = 1;

  private fullWidth = true;

  private showMore = false;

  private toggleRight = false;

  private setToggleRight(isRight: boolean) {
    this.toggleRight = isRight;
  }
}
</script>
