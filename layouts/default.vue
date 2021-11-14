<template>
    <div>
        <nav
            class="navbar header has-shadow is-primary"
            role="navigation"
            aria-label="main navigation"
        >
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="~assets/buefy.png" alt="Buefy" height="28" />
                </a>

                <div class="navbar-burger">
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </nav>
        <ul class="menu-list">
            <li v-for="(item, key) of items" :key="key">
                <NuxtLink :to="item.to" exact-active-class="is-active">
                    {{ item.title }}
                </NuxtLink>
            </li>
        </ul>
        <section class="main-content columns">
            <div class="container column is-10">
                <Nuxt />
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'Главная',
                    to: { name: 'index' },
                },
                {
                    title: 'Прогноз на 10 дней',
                    to: {
                        name: 'in-city',
                        params: { city: this.$route.params.city ?? 'minsk' },
                    },
                },
            ],
        }
    },
}
</script>

<style>
.menu-list {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    margin-bottom: 10px;
}
.my-link {
    padding: 6px 12px 10px;
}
</style>
