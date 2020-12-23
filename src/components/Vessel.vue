<template>
  <div
    class="rounded-xl bg-white dark:bg-blue-gray-900 p-4 shadow-lg py-4 flex flex-col"
  >
    <div id="CardHeader" class="flex flex-row justify-between">
      <span class="font-bold text-xl">Mash Kettle</span>
      <div class="text-green-600">
        <svg
          class="w-8 h-8"
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
          ></path>
        </svg>
      </div>
    </div>

    <div class="pt-6 w-full mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full">
          <div class="space-y-3">
            <div
              id="6x6grid"
              class="mx-auto grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              <div v-for="n in 2" :key="n">
                <Sensorcard />
              </div>
              <Actorcard />
            </div>
          </div>
        </div>
      </div>
    </div>

    <header
      id="CardSubHeader"
      class="pt-5 items-center flex flex-row justify-between cursor-pointer" @click="showMore = !showMore"
    >
      <span class="font-bold text-sm">Show other sensor readings</span>
        <svg
          class="w-4 h-4 transform transition duration-200 ease-in-out"
          :class="{ 'rotate-90': showMore }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      <!-- <Toggle :isRight="toggleRight" @toggleRight="setToggleRight($event)" /> -->
    </header>
    <div v-if="showMore" class="flex flex-row">
      <div class="w-full h-full overflow-x-hidden">
        <table class="w-full space-y-2 shadow text-left">
          <thead class="text-xs font-medium">
            <tr class="border-b">
              <th class="w-1/4">Sensor ID</th>
              <th class="w-1/4">Type</th>
              <th class="w-1/4">Reading</th>
              <th class="w-1/4">Status</th>
            </tr>
          </thead>
          <tbody class="text-xs">
            <tr>
              <td class="">Mash Bottom</td>
              <td class="">DS18B20</td>
              <td class="">57&#8451;</td>
              <td class="text-green-400">Ok</td>
            </tr>
            <tr class="bg-gray-100 dark:bg-blue-gray-800">
              <td class="">Mash Bottom</td>
              <td class="">DS18B20</td>
              <td class="">57&#8451;</td>
              <td class="text-green-400">Ok</td>
            </tr>
            <tr>
              <td class="">Mash Bottom</td>
              <td class="">DS18B20</td>
              <td class="">57&#8451;</td>
              <td class="text-green-400">Ok</td>
            </tr>
            <tr class="bg-gray-100 dark:bg-blue-gray-800">
              <td class="">Mash Bottom</td>
              <td class="">DS18B20</td>
              <td class="">57&#8451;</td>
              <td class="text-green-400">Ok</td>
            </tr>
            <tr>
              <td class="">Mash Bottom</td>
              <td class="">DS18B20</td>
              <td class="">57&#8451;</td>
              <td class="text-green-400">Ok</td>
            </tr>
            <tr class="bg-gray-100 dark:bg-blue-gray-800">
              <td class="">Mash Bottom</td>
              <td class="">DS18B20</td>
              <td class="">57&#8451;</td>
              <td class="text-green-400">Ok</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
import Sensorcard from "../components/subcomponents/Sensorcard.vue";
import Actorcard from "../components/subcomponents/Actorcard.vue";
import Toggle from "../components/utils/Toggle.vue";

@Options({
  components: {
    Sensorcard,
    Actorcard,
    Toggle,
  },
})
export default class Vessel extends Vue {
  @Prop() fullWidth!: boolean;
  @Prop() issue!: number;

  private toggleRight = false;

  private setToggleRight(isRight: boolean) {
    this.toggleRight = isRight;
  }
  private showMore = false;
}
</script>
