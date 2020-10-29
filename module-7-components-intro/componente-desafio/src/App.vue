<template>
  <v-app>
    <Menu></Menu>

    <Toolbar></Toolbar>

    <v-content>
      <Carousel></Carousel>
    </v-content>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Menu from '@/components/template/Menu';
import Toolbar from '@/components/template/Toolbar';
import Footer from '@/components/template/Footer';
import Carousel from '@/components/widgets/Carousel';

export default {
  components: {
      Menu,
      Toolbar,
      Footer,
      Carousel,
  },
  data() {
    return {
    }
  }
}
</script>
