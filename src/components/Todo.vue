<template>
  <div id="TODO" class="flex flex-wrap">
    <div class="w-full">
      <div class="rounded-xl bg-white dark:bg-blue-gray-900 p-4 shadow-lg py-4">
        <div class="flex flex-col space-y-4 relative">
          <div class="flex flex-row space-x-4 w-4/12">
            <div><span class="font-bold">TODO</span></div>
            <div class="border h-4 my-auto border-gray-200 rounded-full"></div>
            <div id="progressBar" class="flex flex-row items-center w-full">
              <div class="w-full">
                <div class="bg-gray-200 dark:bg-blue-gray-700 rounded-full">
                  <div class="w-3/12 bg-green-500 py-1 rounded-full"></div>
                </div>
              </div>
              <div class="pl-5 text-sm">3/{{ todos.length }}</div>
            </div>
          </div>
          <div class="relative">
            <div
              class="bg-gradient-to-l from-white dark:from-blue-gray-900 w-6 right-0 absolute h-full"
            ></div>
            <div
              class="flex flex-row h-full w-full space-x-6 overflow-x-auto overflow-y-none pb-4"
            >
              <div v-for="n in todos.length" :key="n" class="flex-none">
                <Todocard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";
import Todocard from "../components/subcomponents/Todocard.vue";

@Options({
  components: {
    Todocard,
  },
})

/* @Options({
  emits: ["toggle-dark-mode"],
}) */
export default class Todo extends Vue {
  /*   @Prop({ default: false }) isDarkmode = false;

  @Emit() 
  private toggleDarkMode(): boolean {
    return !this.isDarkmode;
  }
*/
  private todos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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