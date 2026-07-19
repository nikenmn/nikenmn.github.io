<template>
  <footer class="flex flex-col py-8">
    <div class="footer text-sm h-full">
      <div class="container mx-auto flex flex-col lg:flex-row h-full justify-evenly lg:justify-between items-center space-y-6 lg:space-y-0">
        <div class="flex flex-col space-y-2 w-full lg:w-1/3 text-center lg:text-left">
          <div class="text-2xl font-extrabold">
            Niken Maharani
          </div>
          <p>Let’s create impact with data! 📈</p>
        </div>
        <div class="space-y-2">
          <div class="social-media flex space-x-2 fill-current justify-center lg:justify-end">
            <a rel="noopener" href="https://www.linkedin.com/in/nikenmaharani/" target="_blank" class="transition duration-300 ease-in-out hover:text-green"><client-only><unicon name="linkedin" /></client-only></a>
            <a rel="noopener" href="https://instagram.com/nikenmn_" target="_blank" class="transition duration-300 ease-in-out hover:text-green"><client-only><unicon name="instagram" /></client-only></a>
            <a rel="noopener" href="https://github.com/nikenmn" target="_blank" class="transition duration-300 ease-in-out hover:text-green"><client-only><unicon name="github" /></client-only></a>
          </div>
          <div>Copyright &copy; 2026 Niken Maharani </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
/* No styles needed, all handled by Tailwind classes */
</style>
