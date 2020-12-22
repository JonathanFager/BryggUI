<template>
  <div id="overview" class="flex flex-wrap">
    <div class="w-full">
      <div class="rounded-xl bg-white dark:bg-blue-gray-900 p-4 shadow-lg py-4">
        <div class="flex flex-row w-full justify-between space-x-4">
          <div
            id="brewsstep"
            class="flex flex-col space-y-4 w-3/12 justify-self-start"
          >
            <div id="BrewstepText" class="">
              <span class="text-3xl font-semibold">Brewstep:</span>
              <span class="text-3xl font-bold">Mash In</span>
            </div>
            <div id="progressBar" class="flex flex-row items-center">
              <div class="w-full">
                <div class="bg-gray-200 dark:bg-blue-gray-700 rounded-full">
                  <div class="w-3/12 bg-green-500 py-1 rounded-full"></div>
                </div>
              </div>
              <div class="pl-5 text-sm">9/12</div>
            </div>
            <div id="nextStep" class="text-sm">
              <span>Next: </span><span>Mash out</span>
            </div>
          </div>
          <div
            id="Timer"
            class="flex flex-row my-auto space-x-4 justify-self-start"
          >
            <div class="">
              <svg
                class="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col justify-center">
              <span class="text-lg font-bold">34:50</span>
              <span class="font">/50:00</span>
            </div>
          </div>
          <div
            class="border h-16 my-auto border-gray-200 dark:border-blue-gray-700 rounded-full"
          ></div>
          <div
            id="Description"
            class="w-7/12 max-h-24 my-auto flex flex-col justify-center justify-self-start"
          >
            <p class="text-sm overflow-y-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

/* @Options({
  emits: ["toggle-dark-mode"],
}) */
export default class Overview extends Vue {
/*   @Prop({ default: false }) isDarkmode = false;

  @Emit() 
  private toggleDarkMode(): boolean {
    return !this.isDarkmode;
  }
*/
} 
</script>