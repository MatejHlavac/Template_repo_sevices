<script>
import siteContent from '~/content/site_content.json'

export default {
    data() {
        const services = siteContent.services
        return {
            services,
            showedService: services[0]?.id ?? null
        }
    },

    methods: {
        changeShowedService(service) {
            this.showedService = service.id
        }
    },

    computed: {
        serviceToShow() {
            const service = this.services.find(service => service.id === this.showedService)
            return service
        }
    }
}
</script>

<template>
    <h2 class="services-section-title">Naše služby</h2>
    <div class="service-content-container">
        <div class="service-detail" v-if="serviceToShow">
            <h3>{{ serviceToShow.nazov }}</h3>
            <p>{{ serviceToShow.popis }}</p>
        </div>
        <p v-else>Ups, niečo sa pokazilo</p>
    </div>
    <div class="service-cards-container">
        <div class="service-card" v-for="service in services" :key="service.id">
            <ServiceCard
                :service="service"
                @vybrata-sluzba="changeShowedService"
            />
        </div>
    </div>
</template>

<style scoped>
.services-section-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1.5rem;
}

.service-content-container {
    margin-bottom: 2rem;
    padding: 1rem;
    background: #f9fafb;
    border-radius: 8px;
}

.service-detail h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.5rem;
}

.service-detail p {
    color: #4b5563;
    line-height: 1.5;
}

.service-cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.service-card {
    flex: 1 1 120px;
    min-width: 120px;
}
</style>