<script>
export default {
    props: ['error'],
}
</script>

<template>
    <div class="is-size-3 has-text-centered mt-6">
        <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
        <template v-else>
            <h1>ОШИБКА</h1>
            <pre>
                {{ error }}
            </pre>
        </template>
        <NuxtLink to="/">На главную</NuxtLink>
    </div>
</template>
