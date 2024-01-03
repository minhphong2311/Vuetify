<template>
    <header>
        <div class="top-header-wrap">
            <div class="top-header-box">
                <div class="top-header-left">
                    <h1><router-link to="/"><img v-bind:src="'https://gdvplatform.or.kr/img/main_logo2-1.527ae773.svg'" /> </router-link></h1>
                </div>
                <div class="top-header-right">
                    <v-btn :to="'/login'">로그인</v-btn>
                </div>
            </div>
        </div>
        <div class="bottom-header-wrap">
            <div class="bottom-header-box">
                <ul class="menu-list-ul">
                    <li class="menu-list-li active">
                        <router-link to="/">Home</router-link>
                        <ul class="menu-sub">
                            <li><router-link to="/">Link 1</router-link> </li>
                            <li><router-link to="/">Link 2</router-link> </li>
                            <li><router-link to="/">Link 3</router-link> </li>
                            <li><router-link to="/">Link 4</router-link> </li>
                        </ul>
                    </li>
                    <li class="menu-list-li">
                       <router-link to="/menu01">Menu 01</router-link>
                        <ul class="menu-sub">
                            <li><router-link to="/">Link 1</router-link> </li>
                            <li><router-link to="/">Link 2</router-link> </li>
                            <li><router-link to="/">Link 3</router-link> </li>
                            <li><router-link to="/">Link 4</router-link> </li>
                        </ul>
                    </li>
                    <li class="menu-list-li">
                       <router-link to="/menu02">Menu 02</router-link>
                        <ul class="menu-sub">
                            <li><router-link to="/">Link 1</router-link> </li>
                            <li><router-link to="/">Link 2</router-link> </li>
                            <li><router-link to="/">Link 3</router-link> </li>
                            <li><router-link to="/">Link 4</router-link> </li>
                        </ul>
                    </li>
                    <li class="menu-list-li">
                       <router-link to="/menu03">Menu 03</router-link>
                        <ul class="menu-sub">
                            <li><router-link to="/">Link 1</router-link> </li>
                            <li><router-link to="/">Link 2</router-link> </li>
                            <li><router-link to="/">Link 3</router-link> </li>
                            <li><router-link to="/">Link 4</router-link> </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
  }
</script>