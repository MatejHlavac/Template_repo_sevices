<script>
import siteContent from '~/content/site_content.json'

export default {
    data() {
        return {
            nav: siteContent.nav
        }
    }
}
</script>

<template>
    <nav class="navigation">
        <div class="container">
            <div class="nav-content">
                <div class="logo">
                    <a href="#hero">
                        <NuxtImg
                            src="/images/nav_logo.webp"
                            :alt="nav.logoAlt"
                            height="35"
                            loading="eager"
                            format="webp"
                        />
                    </a>
                </div>
                <ul class="nav-links">
                    <li v-for="link in nav.links" :key="link.href">
                        <a :href="link.href">{{ link.label }}</a>
                    </li>
                </ul>
                <a href="#contact" class="nav-cta">{{ nav.cta }}</a>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navigation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #f4f3ee;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 80, 157, 0.1);
    padding: 16px 0;
}

.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
}

.nav-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo a {
    display: inline-block;
    text-decoration: none;
    transition: opacity 0.3s ease;
}

.logo a:hover {
    opacity: 0.8;
}

.logo img {
    height: 35px;
    width: auto;
    display: block;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 32px;
    margin: 0;
    padding: 0;
}

.nav-links a {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s ease;
    position: relative;
}

.nav-links a:hover {
    color: #00509d;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #00509d;
    transition: width 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-cta {
    display: inline-block;
    padding: 10px 24px;
    background-color: #00509d;
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    border: 2px solid #00509d;
}

.nav-cta:hover {
    background-color: #003d7a;
    border-color: #003d7a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 80, 157, 0.3);
}

/* Responsive */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .nav-content {
        justify-content: space-between;
    }
}
</style>
