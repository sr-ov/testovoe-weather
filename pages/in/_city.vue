<script lang="ts">
import {
    computed,
    defineComponent,
    onMounted,
    reactive,
    useRoute,
} from '@nuxtjs/composition-api'
import { useValidationResult } from '~/hooks/useValidationResult'
import { useWeather } from '~/hooks/useWeather'
import { required, pattern } from '~/utils/validationRules'

const QUANTITY = 10

export default defineComponent({
    setup() {
        const route = useRoute()
        const city = route.value.params.city ?? 'minsk'
        const { weather, request, isLoading } = useWeather(city, QUANTITY)
        const inputValue = reactive({ value: city })
        const rules = reactive({
            value: [required(), pattern(/^[a-zA-Z\s]+$/)],
        })
        const { hasError, getErrorMsg, getHandlers, checkResult } =
            useValidationResult(inputValue, rules)

        const onSubmit = async () => {
            const isValid = checkResult()
            if (isValid) {
                try {
                    await request(inputValue.value, QUANTITY)
                } catch (error) {
                    console.error(error)
                }
            }
        }

        onMounted(async () => {
            await request(city, QUANTITY)
        })

        return {
            getHandlers,
            weather,
            onSubmit,
            inputValue,
            hasError,
            getErrorMsg,
            isEmpty: computed(() => !weather.value?.forecast?.length),
            isLoading,
        }
    },
})
</script>

<template>
    <section v-if="weather" class="section">
        <form class="form mb-6" @submit.prevent="onSubmit">
            <b-field
                label="Введите название города"
                :type="{ 'is-danger': hasError() }"
                :message="{ [getErrorMsg()]: hasError() }"
            >
                <b-input
                    v-model="inputValue.value"
                    type="text"
                    v-on="getHandlers()"
                ></b-input>
            </b-field>
        </form>
        <div v-if="!isEmpty" class="weather-columns">
            <div
                v-for="(el, i) in weather.forecast"
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
        <h3 v-else class="is-size-3 has-text-centered">Ничего не найдено</h3>
    </section>
</template>
