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
        <div class="service-card">
            <ServiceCard 
                v-for="service in services"
                :key="service.id"
                @vybrata-sluzba="changeShowedService"
                :service="service">
            </ServiceCard>
        </div>
    </div>
</template>