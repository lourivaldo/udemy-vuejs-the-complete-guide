<template>
   <div>
       <h1 class="display-3 font-weight-light mb-4">Query and Negotiate stocks</h1>
       <v-sheet :elevation="6" class="pa-2 blue darken-2" color="">
           <v-icon class="white--text mr-3">info</v-icon>
           <span class="headline white--text">
               You can Save & Load your data
           </span>
       </v-sheet>
       <v-sheet :elevation="6" class="pa-2 mt-3 success darken-1" color="">
           <v-icon class="white--text mr-3">info</v-icon>
           <span class="headline white--text">
               Click in 'FINISH DAY' to start a new day!
           </span>
       </v-sheet>
       <v-divider class="my-4" />
       <p class="display-1"><strong>Your funds:</strong>{{ funds | currency }}</p>
   </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>

<style>

</style>

