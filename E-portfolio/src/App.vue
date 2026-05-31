<template>
  <div class="flex w-full justify-center h-screen">
    <div class="flex flex-col w-1/2 p-4 bg-brand-black">
      <h1 class="text-8xl flex justify-center text-brand-blue">Portfolio</h1>
      <nav class="flex gap-8 m-4">
        <router-link
          class="text-2xl border-b border-brand-blue text-white"
          to="/"
          >Home</router-link
        >
        <router-link
          class="text-2xl border-b border-brand-blue text-white"
          to="/blog-posts"
          >Blog posts</router-link
        >
        <router-link
          class="text-2xl border-b border-brand-blue text-white"
          to="/about"
          >About</router-link
        >
      </nav>
      <div class="h-full p-4 rounded-md">
        <router-view />
      </div>
    </div>
  </div>
</template>
