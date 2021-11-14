<script lang="ts">
import { defineComponent, ref, PropType } from '@nuxtjs/composition-api'
import { normalizeDate } from '../utils/normalizeDate'
import { WeatherItemData } from '~/api/types'

export default defineComponent({
    props: {
        weather: {
            type: Object as PropType<WeatherItemData>,
            default: () => ({}),
        },
    },

    setup() {
        return {
            normalizeDate,
        }
    },
})
</script>

<template>
    <div>
        <h3 class="is-italic title-list has-text-weight-medium is-size-5">
            Прогноз на {{ normalizeDate(weather.valid_date) }}
        </h3>
        <b-image
            :src="`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`"
            :alt="weather.weather.description"
            custom-class="weather-img"
        ></b-image>
        <ul class="weather-list">
            <li class="weather-list-item">
                <h4 class="is-size-6 has-text-weight-medium">Температура</h4>
                {{ weather.temp }} &deg;C
            </li>
            <li class="weather-list-item">
                <h4 class="is-size-6 has-text-weight-medium">Облачность</h4>
                {{ weather.clouds }} %
            </li>
            <li class="weather-list-item">
                <h4 class="is-size-6 has-text-weight-medium">
                    Направление ветра
                </h4>
                {{ weather.wind_cdir_full }}
            </li>
            <li class="weather-list-item">
                <h4 class="is-size-6 has-text-weight-medium">Влажность</h4>
                {{ weather.rh }} %
            </li>
        </ul>
    </div>
</template>

<style>
.title-list {
    margin-bottom: 15px;
}

.weather-list-item:not(:last-child) {
    margin-bottom: 5px;
}

.weather-img {
    width: 50px !important;
}
</style>
