<template>
  <div>
    <Hero>
      <div class="container mx-auto">
        <div class="flex flex-col space-y-4 text-center text-xl py-20">
          <div class="text-5xl normal-emoji-weight">

          </div>
          <div class="text-3xl">

          </div>

         <h1 class="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
          Hi, I'm <Emphasize>Niken Maharani</Emphasize>
         </h1>
          <p class="text-lg text-gray-600 leading-relaxed space-y-4">
            A passionate Data Analyst with expertise in transforming complex datasets into clear insights.
          </p>

          <p class="text-lg text-gray-600 leading-relaxed mt-4">
            Backed by a Business Information Systems background, I combine analytical thinking, business understanding,
            and technical skills to support smarter decisions and better outcomes.
          </p>

          <p class="text-lg text-gray-600 leading-relaxed mt-4">
            Let’s create impact with data! 📈
          </p>
        </div>
      </div>
    </Hero>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import getSiteMeta from '~/utils/getSiteMeta'
import Emphasize from '~/components/Emphasize.vue'
export default {
  components: { Emphasize, Hero },
  async asyncData ({ $content }) {
    const heroContent = await $content('index/hero').fetch()
    const whatIDoContent = await $content('index/what-i-do').fetch()

    return {
      heroContent, whatIDoContent
    }
  },
  data () {
  },
  head () {
    return {
      title: 'Niken Maharani ',
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
      meta: [
        ...this.meta
      ]
    }
  },
  computed: {
    meta () {
      return getSiteMeta()
    }
  }
}
</script>

<style scoped>
</style>
