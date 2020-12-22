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
              <content
                id="sensorCard"
                class="rounded-lg space-y-4 border-2 dark:bg-blue-gray-800 p-2 min-h-20 flex flex-col items-center"
                :class="{
                  'col-span-full': fullWidth,
                  'col-span-1': !fullwidth,
                  'bg-blue-gray-100 border-transparent': issue === 1,
                  'bg-yellow-100 border-yellow-400': issue === 2,
                  'bg-red-100 border-red-600': issue === 3,
                }"
              >
                <div class="flex flex-row justify-between w-full">
                  <span class="font-semibold text-sm">Mash Sensor</span>
                  <div
                    :class="{
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
                <div id="Main Sensor Value" class="flex flex-row items-center">
                  <div id="icon" class="pr-2">
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5"
                      />
                      <line x1="10" y1="9" x2="14" y2="9" />
                    </svg>
                  </div>
                  <div class="text-3xl font-bold">
                    <span>67,3</span><span>&#8451;</span>
                  </div>
                </div>

                <div
                  class="w-full text-xs justify-center mx-auto grid gap-x-1 gap-y-3"
                  :class="{
                    'grid-cols-3 sm:grid-cols-3': fullWidth,
                    'grid-cols-2 sm:grid-cols-2': !fullWidth,
                  }"
                >
                  <div class="">
                    <span class="font-normal">Target:</span>
                    <div>
                      <span class="font-extrabold">72,3</span
                      ><span>&#8451;</span>
                    </div>
                  </div>
                  <div class="font-normal">
                    <span>Diff:</span>
                    <div>
                      <span class="font-extrabold">2,1</span
                      ><span>&#8451;</span>
                    </div>
                  </div>

                  <div class="">
                    <span class="font-normal">RoC:</span>
                    <div>
                      <span class="font-extrabold">1,27</span
                      ><span>&#8451;/min</span>
                    </div>
                  </div>
                </div>
              </content>
              <content
                id="sensorCard"
                class="rounded-lg space-y-4 border-2 dark:bg-blue-gray-800 p-2 min-h-20 flex flex-col items-center"
                :class="{
                  'col-span-full': fullWidth,
                  'col-span-1': !fullwidth,
                  'bg-blue-gray-100 border-transparent': issue === 1,
                  'bg-yellow-100 border-yellow-400': issue === 2,
                  'bg-red-100 border-red-600': issue === 3,
                }"
              >
                <div class="flex flex-row justify-between w-full">
                  <span class="font-semibold text-sm">Mash Sensor</span>
                  <div
                    :class="{
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
                <div id="Main Sensor Value" class="flex flex-row items-center">
                  <div id="icon" class="pr-2">
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
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path
                        d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5"
                      />
                      <line x1="10" y1="9" x2="14" y2="9" />
                    </svg>
                  </div>
                  <div class="text-3xl font-bold">
                    <span>67,3</span><span>&#8451;</span>
                  </div>
                </div>

                <div
                  class="w-full text-xs justify-center mx-auto grid gap-x-1 gap-y-3"
                  :class="{
                    'grid-cols-3 sm:grid-cols-3': fullWidth,
                    'grid-cols-2 sm:grid-cols-2': !fullWidth,
                  }"
                >
                  <div class="">
                    <span class="font-normal">Target:</span>
                    <div>
                      <span class="font-extrabold">72,3</span
                      ><span>&#8451;</span>
                    </div>
                  </div>
                  <div class="font-normal">
                    <span>Diff:</span>
                    <div>
                      <span class="font-extrabold">2,1</span
                      ><span>&#8451;</span>
                    </div>
                  </div>

                  <div class="">
                    <span class="font-normal">RoC:</span>
                    <div>
                      <span class="font-extrabold">1,27</span
                      ><span>&#8451;/min</span>
                    </div>
                  </div>
                </div>
              </content>
            </div>
          </div>
        </div>
      </div>
    </div>

    <header
      id="CardSubHeader"
      class="pt-5 items-center flex flex-row justify-between"
    >
      <span class="font-bold text-sm">Show other sensor readings</span>
      <Toggle :isRight="toggleRight" @toggleRight="setToggleRight($event)" />
    </header>
    <div v-if="toggleRight" class="flex flex-row">
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
            <tr class="bg-gray-100">
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
            <tr class="bg-gray-100">
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
            <tr class="bg-gray-100">
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
import Toggle from "../components/utils/Toggle.vue";

@Options({
  components: {
    Toggle,
  },
})
export default class Vessel extends Vue {
    @Prop() 
    issue!: number;
    fullWidth!: boolean;

  private toggleRight = false;

  private setToggleRight(isRight: boolean) {
    this.toggleRight = isRight;
  }
}
</script>