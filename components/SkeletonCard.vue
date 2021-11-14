<template>
    <div class="skeleton-card">
        <h3 class="is-italic title-list has-text-weight-medium is-size-5">
            <b-skeleton animated></b-skeleton>
        </h3>
        <b-skeleton height="40" animated></b-skeleton>
        <ul class="weather-list">
            <li class="weather-list-item">
                <b-skeleton height="40" animated></b-skeleton>
            </li>
            <li class="weather-list-item">
                <b-skeleton height="40" animated></b-skeleton>
            </li>
            <li class="weather-list-item">
                <b-skeleton height="40" animated></b-skeleton>
            </li>
            <li class="weather-list-item">
                <b-skeleton height="40" animated></b-skeleton>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.weather-list-item {
    min-height: 50px;
}
</style>
