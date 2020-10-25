<template>
  <v-app>
    <app-menu></app-menu>

    <app-toolbar></app-toolbar>

    <v-content>
      <app-carousel></app-carousel>
    </v-content>

    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Menu from '@/components/template/Menu';
import Toolbar from '@/components/template/Toolbar';
import Footer from '@/components/template/Footer';
import Carousel from '@/components/widgets/Carousel';

export default {
  components: {
      'app-menu': Menu,
      'app-toolbar': Toolbar,
      'app-footer': Footer,
      'app-carousel': Carousel,
  },
  data() {
    return {
    }
  }
}
</script>
