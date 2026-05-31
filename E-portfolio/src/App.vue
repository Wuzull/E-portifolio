<template>
  <div class="flex w-full justify-center">
    <div class="flex flex-col justify-center w-1/2 border">
      <nav>
        <router-link to="/">Home</router-link>
      </nav>
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>
