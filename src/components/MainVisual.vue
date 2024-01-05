<template>
    <div class="main-visual">
        <v-carousel>
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
        </v-carousel>
        <div class="main-visual-txt">
            <h2 class="main-visual-tit">GDV 통합정보관리시스템</h2>
            <v-card class="mx-auto" max-width="700">
                <v-card-text>
                    <v-text-field :loading="loading" density="compact" variant="solo" label="검색어를 입력해주세요"
                        append-inner-icon="mdi-magnify" single-line hide-details
                        @click:append-inner="onClick"></v-text-field>
                </v-card-text>
            </v-card>

            <div class="search-word-wrap">
                <p>인기 검색어</p>
                <ul class="search-word-link">
                    <li><router-link
                            to="https://gdvplatform.or.kr/mid/0135000000?inqVal=%EA%B0%95%EC%9B%90%EB%8C%80%ED%95%99%EA%B5%90"
                            title="강원대학교"><span>1</span> 강원대학교 </router-link></li>
                    <li><router-link to="https://gdvplatform.or.kr/mid/0135000000?inqVal=%EB%94%A5%EB%9F%AC%EB%8B%9D"
                            title="딥러닝"><span>2</span> 딥러닝 </router-link></li>
                    <li><router-link to="https://gdvplatform.or.kr/mid/0135000000?inqVal=%EB%94%A5%EB%9F%AC%EB%8B%9D"
                            title="3D프린터"><span>3</span> 3D프린터 </router-link></li>
                    <li><router-link to="https://gdvplatform.or.kr/mid/0135000000?inqVal=%EB%94%A5%EB%9F%AC%EB%8B%9D"
                            title="연구소"><span>4</span> 연구소 </router-link></li>
                </ul>
            </div>

        </div>
    </div>
</template>
<script>
// import carousel from 'vue-owl-carousel'

export default {
    // components: { carousel },
    data: () => ({
        loaded: false,
        loading: false,
    }),

    methods: {
        onClick() {
            this.loading = true

            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },
    },
}
</script>