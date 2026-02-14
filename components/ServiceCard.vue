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
        <span class="service-button-label">{{ service.nazov }}</span>
    </button>
</template>

<style scoped>
.service-button {
    display: block;
    width: 100%;
    padding: 1rem;
    border: 2px solid #00509d;
    border-radius: 8px;
    background: #fff;
    color: #00509d;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
}

.service-button:hover {
    background: #00509d;
    color: #fff;
}

.service-button-label {
    display: block;
    text-align: center;
}
</style>