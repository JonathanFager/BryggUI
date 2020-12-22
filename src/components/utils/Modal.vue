<template>
  <div v-if="isVisible">
    <div
      class="fixed inset-0 z-50 transition duration-150 ease-in-out flex justify-center items-center"
    >
      <div class="py-12  absolute top-0 right-0 bottom-0 left-0" id="modal">
        <div role="alert" class="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div
            class="py-8 px-5 md:px-32 bg-white dark:bg-blue-gray-800 shadow-md rounded border border-gray-400"
          >
            <div class="w-full flex justify-center text-gray-600 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-lock"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <circle cx="12" cy="16" r="1" />
                <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
              </svg>
            </div>
            <h1
              class="text-center text-gray-800 font-lg font-bold tracking-normal leading-tight mb-5"
            >
              Enter Original Gravity
            </h1>
            <input
              id="pass"
              class="mb-5 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="1.0010"
            />
            <div class="flex items-center justify-center w-full">
              <button
                class="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                @click="emitConfirm()"
              >
                Confirm
              </button>
              <button
                class="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                @click="emitCancel()"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="opacity-40 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script lang="ts">
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
