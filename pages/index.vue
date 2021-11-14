<script lang="ts">
import { defineComponent, ref, watch, onMounted } from '@nuxtjs/composition-api'
import { useCityFromStorage } from '~/hooks/useCityFromStorage'
import { useWeather } from '~/hooks/useWeather'

export default defineComponent({
    setup() {
        const { city, setCity } = useCityFromStorage()
        const { weather, request, isLoading } = useWeather(city.value, 4)
        const items = ref([
            { title: 'Минск', query: 'minsk' },
            { title: 'Москва', query: 'moscow' },
            { title: 'Братислава', query: 'bratislava' },
        ])
        const selectedItem = ref(
            items.value.findIndex((el) => el.query === city.value)
        )

        watch(selectedItem, async (newValue) => {
            try {
                const { query } = items.value[newValue]
                await request(query, 4)
                setCity(query)
            } catch (error) {
                console.error(error)
            }
        })

        onMounted(async () => {
            await request(city.value, 4)
        })

        return {
            weather,
            selectedItem,
            items,
            isLoading,
        }
    },
})
</script>

<template>
    <section class="section">
        <b-tabs
            v-if="weather"
            v-model="selectedItem"
            :animated="false"
            position="is-centered"
        >
            <b-tab-item
                v-for="item in items"
                :key="item.title"
                :label="item.title"
                class="my-tabs"
            >
                <div class="weather-columns mb-6 mt-5">
                    <div class="weather-column">
                        <weather-info-list
                            v-if="!isLoading"
                            :weather="weather.current"
                        ></weather-info-list>
                        <skeleton-card v-else-if="isLoading"></skeleton-card>
                    </div>
                </div>

                <div class="weather-columns">
                    <div
                        v-for="(el, i) in weather.forecast.slice(1)"
                        :key="i"
                        class="weather-column"
                    >
                        <weather-info-list
                            v-if="!isLoading"
                            :weather="el"
                        ></weather-info-list>
                        <skeleton-card v-else></skeleton-card>
                    </div>
                </div>
            </b-tab-item>
        </b-tabs>
    </section>
</template>

<style>
@media (max-width: 360px) {
    .tabs li > a {
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>
