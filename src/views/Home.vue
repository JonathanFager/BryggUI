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

      <Navbar
        :isDarkmode="toggleDarkMode"
        @toggleDarkMode="setDarkMode($event)"
      />

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
          <div v-for="n in 3" :key="n">
          <Vessel :issue="issue"/>
          </div>

        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Navbar from "../components/Navbar.vue";
import Vessel from "../components/Vessel.vue";
import Toggle from "../components/utils/Toggle.vue";

@Options({
  components: {
    Navbar,
    Vessel,
    Toggle,
  },
})
export default class Home extends Vue {
  private toggleActive = false;

  private toggleDarkMode = false;

  private issue = 1;

  private toggleRight = false;

  private setDarkMode(darkMode: boolean) {
    this.toggleDarkMode = darkMode;
  }

  private setToggleRight(isRight: boolean) {
    this.toggleRight = isRight;
  }

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