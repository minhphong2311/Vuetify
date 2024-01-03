<template>
    <footer>
        <div class="footer-wrap">
            <div class="top-footer-box">
                <div class="top-footer-col1">
                    강원지역혁신플랫폼 GDV 통합정보관리시스템
                </div>
                <div class="top-footer-col2">
                    <ul>
                        <li><router-link to="/menu01" title="개인정보처리방침">개인정보처리방침</router-link></li>
                        <li><router-link to="/menu02" title="이메일무단수집거부">이메일무단수집거부</router-link></li>
                    </ul>
                </div>
                <div class="top-footer-col3">
                    <div class="text-center">
                        <v-menu transition="slide-y-transition">
                            <template v-slot:activator="{ props }">
                                <v-btn color="primary" v-bind="props">
                                    강원LRS공유대학
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item v-for="(item, index) in items" :key="index">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </div>
            </div>

            <div class="bottom-footer-box">
                <ul class="bottom-footer-info">
                    <li>(24341) 강원특별자치도 춘천시 강원대학길 1 강원대학교 집현관 5층 강원지역혁신플랫폼 총괄운영센터 사무국</li>
                    <li>TEL: <a href="tel:033-250-6662" title="전화걸기">033-250-6662</a>, <a title="전화걸기"
                            href="tel:033-250-6773">6773</a></li>
                    <li>Gangwon Regional Innovation Platform All right reserved.</li>
                </ul>
            </div>
        </div>

    </footer>
</template>


<script>
export default {
    data: () => ({
        items: [
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me' },
            { title: 'Click Me 2' },
        ],
    }),
}
</script>