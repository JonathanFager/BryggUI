<template>
  <main class="h-full" :class="{ ' dark ': toggleDarkMode }">
    <div
      id="content"
      class="bg-blue-gray-100 overscroll-none font-sans dark:bg-darkTrueGray w-full dark:text-gray-100 text-gray-700 h-full pb-24"
    >
      <!-- <section
        class="w-full flex flex-row space-x-4 py-1 px-2 text-xs border-green-600 border-1 mb-2 bg-gray-200 dark:bg-blue-gray-700"
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
      </section> -->

      <Navbar
        :isDarkmode="toggleDarkMode"
        @toggleDarkMode="setDarkMode($event)"
      />

      <div class="mx-8 space-y-4">
        <Overview />
        <Todo />
        <!-- <Chart /> -->

        <section
          id="vesselGrid"
          class="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4"
        >
          <div v-for="n in 3" :key="n">
            <Vessel :issue="issue" :fullWidth="fullWidth" />
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
import Todo from "../components/Todo.vue";
import Chart from "../components/Chart.vue";
import Vessel from "../components/Vessel.vue";
import Toggle from "../components/utils/Toggle.vue";

@Options({
  components: {
    Navbar,
    Overview,
    Todo,
    Chart,
    Vessel,
    Toggle
  }
})
export default class Home extends Vue {
  
  private toggleDarkMode = false;

  private setDarkMode(darkMode: boolean) {
    this.toggleDarkMode = darkMode;
  }

/*
  private toggleActive = false;
  private modalVisible = false;
  private issue = 1;
  private fullWidth = true;
  private toggleRight = false;

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
  */
}
</script>
