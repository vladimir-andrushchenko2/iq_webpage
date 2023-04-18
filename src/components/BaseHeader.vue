<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <div class="menu" :class="{ menu_opened: isMenuOpen }">
    <button class="close-menu-btn" @click="isMenuOpen = !isMenuOpen">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z"
          fill="#FFC700"
        />
      </svg>
    </button>

    <nav>
      <ul class="links-list">
        <li class="links-item">
          <RouterLink class="link" to="/">Главная</RouterLink>
        </li>
        <li class="links-item">
          <RouterLink class="link" to="/">Информация о тесте</RouterLink>
        </li>
        <li class="links-item">
          <RouterLink class="link" to="/">Пройти тест</RouterLink>
        </li>
      </ul>
    </nav>
  </div>

  <header class="header">
    <button class="menu-btn" @click="isMenuOpen = !isMenuOpen">
      <svg
        width="24"
        height="16"
        viewBox="0 0 24 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z"
          fill="#696969"
        />
      </svg>
    </button>

    <slot></slot>
  </header>
</template>

<style scoped>
.links-item:not(:first-child) {
  margin-top: 27px;
}

.link {
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
}

.link:active {
  color: #f4ce0c;
}

.close-menu-btn {
  position: absolute;
  top: 18px;
  right: 13px;
}

.close-menu-btn:active path {
  fill: antiquewhite;
}

.header {
  background-color: #181818;
  display: flex;
  align-items: center;
  min-height: 46px;
  padding: 0 15px;
}

.menu-btn {
  margin-right: 9px;
}

.menu-btn:active path {
  fill: yellow;
}

.menu {
  background-color: #181818;
  width: 100vw;
  height: 100vh;

  position: absolute;
  left: 0;

  visibility: hidden;
  opacity: 0;
  transition: 0.5s ease-in-out;

  padding: 110px 23px 0;
}

.menu_opened {
  visibility: visible;
  opacity: 1;
}
</style>
