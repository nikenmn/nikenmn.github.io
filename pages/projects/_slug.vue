<template>
  <div>
    <Hero>
      <div class="introduction">
        <section class="title-section">
          <img :src="article.icon" :alt="article.title" class="icon">
          <h1 class="py-4 text-4xl font-extrabold text-[#2F6FA3]">
            {{ article.title }}
          </h1>
          <span class="description">{{ article.subtitle }}</span>
        </section>

        <span class="published">Published {{ article.date | formatDate }} · {{ readingTime(article.text) }} min read</span>
      </div>
    </Hero>

    <article class="mt-16">
      <nuxt-content :document="article" />
    </article>
  </div>
</template>

<script>
import moment from 'moment'
import getSiteMeta from '~/utils/getSiteMeta'
import Hero from '~/components/Hero.vue'

export default {
  name: 'Slug',
  filters: {
    formatDate (date) {
      return moment(date).calendar().replace(/\b[A-Z]/, match => match.toLowerCase())
    }
  },
  components: { Hero },
  async asyncData ({ $content, params }) {
    const article = await $content('projects', params.slug, { text: true }).fetch()
    return { article }
  },
  head () {
    return {
      title: this.article.title + ' - Niken Maharani ',
      meta: [
        ...this.meta
      ]
    }
  },
  computed: {
    meta () {
      const metaData = {
        type: 'article',
        title: this.article.title + ' - Niken Maharani ',
        description: this.article.description,
        mainImage: this.article.icon
      }
      return getSiteMeta(metaData)
    }
  },
  methods: {
    readingTime (text) {
      if (text) {
        const wpm = 225
        const words = text.trim().split(/\s+/).length
        return Math.ceil(words / wpm)
      }
      return 0
    }
  }
}
</script>

<style scoped>
  .introduction {
    @apply flex flex-col items-center justify-center w-full px-2 py-8 space-y-4;
  }

  .title-section {
    @apply flex flex-col items-center;
  }

  .description {
    @apply text-xl text-center text-[#4B5563];
  }

  .published {
    @apply opacity-75 text-sm text-[#6B7280];
  }

  .hero {
    @apply pt-20 space-y-8 container mx-auto;
  }

  article {
    @apply mx-auto px-3 font-article leading-relaxed;
    max-width: 768px;
  }

  .icon {
    @apply w-24 mb-4 rounded-3xl;
  }
</style>
