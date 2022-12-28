<script lang="ts">
import VueShell from "./components/VueShell.vue";
import { commands } from "./commands/commands";
import image from "./assets/cowboy-bebop-cigarette.gif";

export default {
  components: { VueShell },
  name: "App",
  data() {
    return {
      send_to_terminal: "",
      banner: {
        header: "Robin Ferré SHELL",
        subHeader: "Interact with to discover my resume",
        helpHeader: 'Enter "help" for more information.',
        emoji: {
          first: "😐",
          second: "😑",
          time: 750,
        },
        sign: `robsh $`,
        img: {
          align: "left",
          link: image,
          width: 100,
          height: 100,
        },
      },
      commands,
    };
  },
  methods: {
    prompt(value: string) {
      this.send_to_terminal = `'${value}' is not recognized as an internal command`;
    },
  },
};
</script>

<template>
  <div id="app">
    <VueShell
      :banner="banner"
      :shell_input="send_to_terminal"
      :commands="commands"
      @shell_output="prompt"
    ></VueShell>
  </div>
</template>

<style>
#app {
  margin: 0 auto;
  font-weight: normal;
  background-color: black;
}

@media (min-width: 1024px) {
  #app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
}
</style>
