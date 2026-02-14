<script>
export default {
    props: {
        service: {
            type: Object,
            required: true
        }
    },

    methods: {
        handleClick() {
            this.$emit('vybrata-sluzba', this.service)
        }
    }
}
</script>

<template>
    <button type="button" @click="handleClick" class="service-button">
        <NuxtImg
            v-if="service.iconImage"
            :src="service.iconImage"
            :alt="service.iconAlt || service.nazov"
            width="48"
            height="48"
            class="service-button-icon"
        />
    </button>
</template>

<style scoped>
.service-button {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 2px solid #00509d;
    border-radius: 8px;
    background: transparent;
    cursor: pointer;
    transition: border-color 0.2s, box-shadow 0.2s;
    overflow: hidden;
}

.service-button:hover {
    border-color: #003d7a;
    box-shadow: 0 0 0 1px #00509d;
}

.service-button-icon {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    transform: scale(1.35);
}

.service-button:hover .service-button-icon {
    filter: brightness(0.9);
}
</style>