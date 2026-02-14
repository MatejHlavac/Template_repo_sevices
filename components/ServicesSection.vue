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
    <section class="services-section">
        <h2 class="services-section-title">Naše služby</h2>
        <div class="services-inner">
            <div class="service-content-container">
                <div class="service-detail" v-if="serviceToShow">
                    <h3>{{ serviceToShow.nazov }}</h3>
                    <p>{{ serviceToShow.popis }}</p>
                </div>
                <p v-else class="service-detail-fallback">Ups, niečo sa pokazilo</p>
                <div class="service-detail-media">
                    <NuxtImg
                        v-if="serviceToShow?.obrazok"
                        :src="serviceToShow.obrazok"
                        :alt="serviceToShow.obrazokAlt || serviceToShow.nazov"
                        width="420"
                        height="440"
                        loading="lazy"
                        format="webp"
                        class="service-detail-image"
                    />
                </div>
            </div>
            <div class="service-cards-container">
                <div class="service-card" v-for="service in services" :key="service.id">
                    <ServiceCard
                        :service="service"
                        @vybrata-sluzba="changeShowedService"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.services-section {
    padding: 5rem 20px 3rem;
    background-color: #fff;
}

.services-section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1f2937;
    text-align: center;
    margin: 0 0 5rem;
}

.services-inner {
    max-width: 1150px;
    margin: 0 auto;
}

.service-content-container {
    display: flex;
    align-items: stretch;
    gap: 2rem;
    margin-bottom: 2.5rem;
    padding: 2rem;
    min-height: 520px;
    background-color: #f4f3ee;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06);
}

.service-detail-media {
    flex: 0 0 420px;
    width: 420px;
    height: 440px;
    margin: 0.75rem 0.75rem 0.75rem auto;
    background: #e5e7eb;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06);
}

.service-detail-media .service-detail-image,
.service-detail-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.service-detail {
    flex: 1;
    min-width: 0;
    max-width: 560px;
    padding-left: 3rem;
    padding-top: 2.5rem;
}

.service-detail-fallback {
    flex: 1;
    padding-left: 3rem;
    padding-top: 2.5rem;
}

.service-detail h3 {
    font-size: 2.75rem;
    font-weight: 600;
    color: #1f2937;
    margin: 0 0 2.75rem;
}

.service-detail p {
    font-size: 1.125rem;
    color: #4b5563;
    line-height: 1.6;
    margin: 0;
}

.service-detail-fallback {
    color: #6b7280;
    margin: 0;
}

.service-cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
}

.service-card {
    width: 70px;
}
</style>