<template>
  <div class="">
    Redirecting
  </div>
</template>

<script>
export default {
  name: 'Index',
  //  eslint-disable-next-line no-unused-vars
  async middleware({ store, redirect }) {
    // await store.dispatch(`market/${GET_ALL_PAIRS}`);
    // const { pairs } = store.state.market;
    // const firstPair = pairs[0];
    // return redirect(`/${firstPair.name}`);
    return redirect('/sign-in');
  },
};
</script>

<style scoped>

</style>
<!--<template>-->
<!--  <div class="landing">-->
<!--    <FirstBlock/>-->
<!--    <Brief/>-->
<!--    <Features/>-->
<!--    <AboutUs/>-->
<!--    <SmartExchange/>-->
<!--    <Map/>-->
<!--    <History/>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { gsap } from 'gsap/dist/gsap';-->
<!--import FirstBlock from '~/components/landing/top-block';-->
<!--import Brief from '~/components/landing/brief';-->
<!--import Features from '~/components/landing/features';-->
<!--import AboutUs from '~/components/landing/about-us';-->
<!--import SmartExchange from '~/components/landing/smart-exchange';-->
<!--import Map from '~/components/landing/map';-->
<!--import History from '~/components/landing/history';-->

<!--export default {-->
<!--  components: {-->
<!--    FirstBlock,-->
<!--    Brief,-->
<!--    Features,-->
<!--    AboutUs,-->
<!--    SmartExchange,-->
<!--    Map,-->
<!--    History,-->
<!--  },-->
<!--  mounted() {-->
<!--    this.createAnimation();-->

<!--    if (this.$route.query.hasOwnProperty('ref')) {-->
<!--      const { ref } = this.$route.query;-->
<!--      this.$router.push(`/sign-up?ref=${ref}`);-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    createAnimation() {-->
<!--      const aboutItems = Array.from(document.querySelectorAll('.about-us-item'));-->

<!--      aboutItems.forEach((item, index) => {-->
<!--        const scene = this.$scrollmagic.scene({-->
<!--          triggerElement: item,-->
<!--          reverse: false,-->
<!--        }).setTween(item, 1.2, {-->
<!--          opacity: 1,-->
<!--          transform: 'translate3d(0, 0, 0)',-->
<!--        });-->

<!--        this.$scrollmagic.addScene(scene);-->
<!--      });-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->
