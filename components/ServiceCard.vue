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
    <button @click="handleClick" class="service-button">
        <p>
            {{ service.obrazokCard }}
        </p>
    </button>
</template>