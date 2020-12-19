<template>
  <main class="" :class="{ ' dark ': toggleDarkMode }">
    <div
      id="content"
      class="bg-blue-gray-100 dark:bg-darkTrueGray w-full dark:text-gray-100 text-gray-700 pb-96"
    >
      <div
        class="w-full flex flex-row space-x-4 py-2 border-red-200 border-2 bg-gray-300"
      >
        <span>Admin bar:</span>
        <button
          class="border px-2 rounded-lg outline-none ring-0"
          @click="toggleIssue"
        >
          Issue
        </button>
        <button class="border px-2 rounded-lg" @click="fullWidth = !fullWidth">
          Half/Full-width
        </button>
      </div>

      <div
        id="Navbar"
        class="px-6 py-2 mb-4 bg-white dark:bg-blue-gray-900 mx-auto flex flex-row items-center align-middle justify-between shadow-lg"
      >
        <h4 class="text-xl font-bold leading-tight">BryggIO</h4>
        <div class="flex flex-row space-x-4">
          <button
            class="focus:outline-none focus:ring-0"
            @click="toggleDarkMode = !toggleDarkMode"
          >
            <svg
              v-if="toggleDarkMode"
              class="w-6 h-6 hover:text-purple-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>

            <svg
              v-else
              class="w-6 h-6 hover:text-purple-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              ></path>
            </svg>
          </button>

          <button
            class="flex flex-row transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-400 border border-white rounded px-8 py-2 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              class="w-5 h-5"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
              />
            </svg>
            <span class="pl-2">Github</span>
          </button>
        </div>
      </div>

      <div class="container space-y-4 mx-auto">
        <div id="overview" class="flex flex-wrap">
          <div class="w-full">
            <div
              class="rounded-xl bg-white dark:bg-blue-gray-900 p-4 shadow-lg py-4"
            >
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
                      <div
                        class="bg-gray-200 dark:bg-blue-gray-700 rounded-full"
                      >
                        <div
                          class="w-3/12 bg-green-500 py-1 rounded-full"
                        ></div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

        <div id="chart" class="flex flex-wrap">
          <div class="w-full">
            <div
              class="rounded-xl bg-white dark:bg-blue-gray-900 h-72 p-4 shadow-lg py-4"
            >
              <!-- I warn you, dont open this div -->
              <div class="relative h-full overflow-y-hidden overflow-hidden">
                <div
                  class="relative absolute right-0 top-0"
                  style="width: 1660px; height: 208px"
                >
                  <div
                    class="opacity-50 absolute shadow border-4 border-blue-500"
                    style="width: 778px; height: 120px; left: 37px; top: 59px"
                  ></div>
                  <div
                    class="opacity-50 absolute shadow border-4 border-purple-500"
                    style="width: 469px; height: 80px; left: 346px; top: 99px"
                  ></div>
                  <div
                    class="opacity-50 absolute shadow border-4 border-green-500"
                    style="width: 424px; height: 160px; left: 191px; top: 19px"
                  ></div>
                  <div
                    class="opacity-50 w-56 h-1 absolute border-4 border-blue-500"
                    style="left: 39px; top: 58.5px"
                  ></div>
                  <div
                    class="opacity-50 w-56 h-1 absolute border-4 border-purple-500"
                    style="left: 39px; top: 178.5px"
                  ></div>
                  <div
                    class="opacity-50 w-52 h-1 absolute border-4 border-purple-500"
                    style="left: 1421px; top: 179px"
                  ></div>
                  <div
                    class="opacity-50 absolute border-4 border-purple-500"
                    style="width: 1156px; height: 1px; left: 265px; top: 39px"
                  ></div>
                  <div
                    class="opacity-50 absolute border-4 border-blue-500"
                    style="width: 1156px; height: 1px; left: 265px; top: 19px"
                  ></div>
                </div>
                <p
                  class="absolute text-xs font-bold leading-none text-right text-gray-400"
                  style="left: 1px; top: 171px"
                >
                  50℃
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 64px; top: 215px"
                >
                  9:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 136px; top: 215px"
                >
                  10:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 214px; top: 215px"
                >
                  11:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 290px; top: 215px"
                >
                  12:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 368px; top: 215px"
                >
                  13:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 447px; top: 215px"
                >
                  14:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 525px; top: 215px"
                >
                  15:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 602px; top: 215px"
                >
                  16:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 680px; top: 215px"
                >
                  17:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 758px; top: 215px"
                >
                  18:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 837px; top: 215px"
                >
                  19:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 915px; top: 215px"
                >
                  20:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 995px; top: 215px"
                >
                  21:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 1073px; top: 215px"
                >
                  22:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 1153px; top: 215px"
                >
                  23:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 1234px; top: 215px"
                >
                  00:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 1316px; top: 215px"
                >
                  01:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 1394px; top: 215px"
                >
                  02:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 1475px; top: 215px"
                >
                  03:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 1556px; top: 215px"
                >
                  04:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-center text-gray-400"
                  style="left: 1637px; top: 215px"
                >
                  05:00
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-right text-gray-400"
                  style="left: 0px; top: 131px"
                >
                  60℃
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-right text-gray-400"
                  style="left: 2px; top: 91px"
                >
                  70℃
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-right text-gray-400"
                  style="left: 0px; top: 51px"
                >
                  80℃
                </p>
                <p
                  class="absolute text-xs font-bold leading-none text-right text-gray-400"
                  style="left: 0px; top: 11px"
                >
                  90℃
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4"
        >
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
                        <div
                          id="Main Sensor Value"
                          class="flex flex-row items-center"
                        >
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
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
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
              <div
                class="flex justify-between items-center"
                @click="toggleActive = !toggleActive"
              >
                <div
                  class="w-10 h-6 flex items-center rounded-full p-1 border-2 border-green-600 duration-300 ease-in-out"
                  :class="{ 'bg-green-600': toggleActive }"
                >
                  <div
                    class="w-4 h-4 bg-white rounded-full shadow-lg transform duration-300 ease-in-out"
                    :class="{
                      'translate-x-4': toggleActive,
                      'bg-gray-400 dark:bg-gray-100': !toggleActive,
                    }"
                  ></div>
                </div>
              </div>
            </header>
            <div v-if="toggleActive" class="flex flex-row">
              <div class="w-full h-full overflow-x-hidden">
                  <table class="w-full space-y-2 shadow text-left">
                    <thead class="text-xs font-medium">
                      <tr class="border-b">
                        <th
                          class="w-1/4"
                        >
                          Sensor ID
                        </th>
                        <th class="w-1/4">
                          Type
                        </th>
                        <th
                          class="w-1/4"
                        >
                          Reading
                        </th>
                        <th
                          class="w-1/4"
                        >
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-xs">
                      <tr>
                        <td
                          class=""
                        >
                          Mash Bottom
                        </td>
                        <td class="">
                          DS18B20
                        </td>
                        <td
                          class=""
                        >
                          57&#8451;
                        </td>
                        <td
                          class="text-green-400"
                        >
                          Ok
                        </td>
                      </tr>
                      <tr class="bg-gray-100">
                        <td
                          class=""
                        >
                          Mash Bottom
                        </td>
                        <td class="">
                          DS18B20
                        </td>
                        <td
                          class=""
                        >
                          57&#8451;
                        </td>
                        <td
                          class="text-green-400"
                        >
                          Ok
                        </td>
                      </tr>
                      <tr>
                        <td
                          class=""
                        >
                          Mash Bottom
                        </td>
                        <td class="">
                          DS18B20
                        </td>
                        <td
                          class=""
                        >
                          57&#8451;
                        </td>
                        <td
                          class="text-green-400"
                        >
                          Ok
                        </td>
                      </tr>
                      <tr class="bg-gray-100">
                        <td
                          class=""
                        >
                          Mash Bottom
                        </td>
                        <td class="">
                          DS18B20
                        </td>
                        <td
                          class=""
                        >
                          57&#8451;
                        </td>
                        <td
                          class="text-green-400"
                        >
                          Ok
                        </td>
                      </tr>
                      <tr>
                        <td
                          class=""
                        >
                          Mash Bottom
                        </td>
                        <td class="">
                          DS18B20
                        </td>
                        <td
                          class=""
                        >
                          57&#8451;
                        </td>
                        <td
                          class="text-green-400"
                        >
                          Ok
                        </td>
                      </tr>
                      <tr class="bg-gray-100">
                        <td
                          class=""
                        >
                          Mash Bottom
                        </td>
                        <td class="">
                          DS18B20
                        </td>
                        <td
                          class=""
                        >
                          57&#8451;
                        </td>
                        <td
                          class="text-green-400"
                        >
                          Ok
                        </td>
                      </tr>


                    </tbody>
                  </table>
                </div>
            </div>
          </div>
          <div
            class="rounded-xl bg-white dark:bg-blue-gray-900 p-4 shadow-lg py-4"
          ></div>

          <div
            class="rounded-xl bg-white dark:bg-blue-gray-900 p-4 shadow-lg py-4"
          ></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// test commit TODO: remove

@Options({
  components: {},
})
export default class Home extends Vue {
  private toggleActive = false;

  private toggleDarkMode = false;

  private issue = 3;

  toggleIssue() {
    if (this.issue === 3) {
      this.issue = 1;
    } else {
      this.issue += 1;
    }
  }

  private fullWidth = true;
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