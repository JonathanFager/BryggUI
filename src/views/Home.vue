<template>
  <main class="" :class="{ ' dark ': toggleDarkMode }">
    <div
      id="content"
      class="bg-blue-gray-100 dark:bg-darkTrueGray w-full dark:text-gray-100 text-gray-700 pb-96"
    >
      <section
        class="w-full flex flex-row space-x-4 py-2 border-red-200 border-2 bg-gray-300"
      >
        <span>Admin bar:</span>
        <button
          class="border px-2 rounded-lg outline-none ring-0"
          @click="toggleIssue"
        >
          Issue
        </button>
        <button class="border px-2 rounded-lg" @click="toggleFullWidth()">
          Half/Full-width
        </button>
      </section>

      <Navbar
        :isDarkmode="toggleDarkMode"
        @toggleDarkMode="setDarkMode($event)"
      />

      <div class="container space-y-4 mx-auto">
      <Overview />
        <div id="TODO" class="flex flex-wrap">
          <div class="w-full">
            <div
              class="rounded-xl bg-white dark:bg-blue-gray-900 p-4 shadow-lg py-4"
            >
              <div class="flex flex-col space-y-4 relative">
                <div class="flex flex-row space-x-4 w-4/12">
                  <div><span class="font-bold">TODO</span></div>
                  <div
                    class="border h-4 my-auto border-gray-200 rounded-full"
                  ></div>
                  <div
                    id="progressBar"
                    class="flex flex-row items-center w-full"
                  >
                    <div class="w-full">
                      <div
                        class="bg-gray-200 dark:bg-blue-gray-700 rounded-full"
                      >
                        <div
                          class="w-3/12 bg-green-500 py-1 rounded-full"
                        ></div>
                      </div>
                    </div>
                    <div class="pl-5 text-sm">3/12</div>
                  </div>
                </div>
                <div class="relative">
                  <div
                    class="bg-gradient-to-l from-white dark:from-blue-gray-900 w-6 right-0 absolute h-full"
                  ></div>
                  <div
                    class="flex flex-row h-full space-x-8 overflow-x-auto overflow-y-none pb-4"
                  >
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-green-600"
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
                      <span class="font-semibold">Todo 1</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-gray-400"
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
                      <span class="font-semibold">Todo 2</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-gray-400"
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
                      <span class="font-semibold">Todo 3</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-gray-400"
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
                      <span class="font-semibold">Todo 4</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-gray-400"
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
                      <span class="font-semibold">Todo 6</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-gray-400"
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
                      <span class="font-semibold">Todo 7</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-gray-400"
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
                      <span class="font-semibold">Todo 8</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-green-600"
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
                      <span class="font-semibold">Todo 1</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-green-600"
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
                      <span class="font-semibold">Todo 1</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-green-600"
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
                      <span class="font-semibold">Todo 1</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-green-600"
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
                      <span class="font-semibold">Todo 1</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-green-600"
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
                      <span class="font-semibold">Todo 1</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-green-600"
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
                      <span class="font-semibold">Todo 1</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-green-600"
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
                          ></path>
                        </svg>
                      </span>
                      <span class="font-semibold">Todo 1</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-green-600"
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
                          ></path>
                        </svg>
                      </span>
                      <span class="font-semibold">Todo 1</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                    <div
                      class="bg-blue-gray-200 dark:bg-blue-gray-800 h-12 flex-none items-center rounded-lg py-2 px-4 flex flex-row space-x-2"
                    >
                      <span class="text-green-600"
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
                      <span class="font-semibold">Todo 1</span>
                      <p class="text-sm">Card body text</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Chart />

  
        <section id="vesselGrid"
          class="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4"
        >
          <div v-for="n in 3" :key="n">
          <Vessel :issue="issue" :fullWidth="fullWidth"/>
          </div>

        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "../components/Navbar.vue";
import Overview from "../components/Overview.vue";
import Chart from "../components/Chart.vue";
import Vessel from "../components/Vessel.vue";
import Toggle from "../components/utils/Toggle.vue";

@Options({
  components: {
    Navbar,
    Chart,
    Overview,
    Vessel,
    Toggle,
  },
})
export default class Home extends Vue {
  private toggleActive = false;

  private toggleDarkMode = false;

  private issue = 1;

  private fullWidth = true;

  private toggleRight = false;

  private setDarkMode(darkMode: boolean) {
    this.toggleDarkMode = darkMode;
  }

  private setToggleRight(isRight: boolean) {
    this.toggleRight = isRight;
  }

  toggleFullWidth() {
    this.fullWidth = !this.fullWidth;
  }

  toggleIssue() {
    if (this.issue === 3) {
      this.issue = 1;
    } else {
      this.issue += 1;
    }
  }

  
}
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10vh;
  display: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ddd6fe;
  border-radius: 10vh;
  height: 20px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ddd6fe;
}
</style>