<template>
    <section id="hero">
        <div class="container">
            <div class="hero-image">
                <NuxtImg
                    src="/images/hero_image.webp"
                    alt="Ukážka profesionálnej práce"
                    width="1400"
                    height="933"
                    loading="eager"
                    format="webp"
                />
            </div>
            <div class="hero-texts">
                <div class="rating">
                    <div class="stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <span class="rating-text"><strong>5.0</strong> od <strong>100+</strong> spokojných zákazníkov</span>
                </div>
                <h1>
                    <span class="title-line underlined">Profesionálne služby,</span>
                    <span class="title-line">na ktoré sa môžete spoľahnúť</span>
                </h1>
                <ul>
                    <li>Rýchlo</li>
                    <li>Kvalitne</li>
                    <li>Spoľahlivo</li>
                </ul>
                <a class="kontakt" href="#contact">Kontaktovať nás</a>
                <a class="služby" href="#services">Naše služby</a>
            </div>
        </div>
    </section>
</template>

<style scoped>
#hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-color: #f9fafb;
}

.container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
}

.hero-texts {
    position: relative;
    z-index: 1;
    max-width: 600px;
}

.hero-image {
    position: absolute;
    right: -40px;
    top: 50%;
    transform: translateY(-50%);
    width: 50%;
    max-width: 600px;
    z-index: 0;
}

.hero-image img {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 20px 20px;
    object-fit: cover;
    box-shadow: 8px 8px 24px rgba(0, 0, 0, 0.15);
}

.rating {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    background-color: rgba(59, 130, 246, 0.05);
    padding: 8px 14px;
    border-radius: 20px;
    width: fit-content;
    border: 1px solid rgba(59, 130, 246, 0.15);
    box-shadow: 0 0 4px rgba(59, 130, 246, 0.08);
}

.stars {
    display: flex;
    gap: 2px;
}

.star {
    color: #3b82f6;
    font-size: 0.9rem;
    line-height: 1;
}

.rating-text {
    font-size: 1rem;
    color: #4b5563;
}

.rating-text strong {
    font-weight: 700;
    color: #1f2937;
}

.hero-texts h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
    color: #1f2937;
    max-width: 700px;
    isolation: isolate;
}

.hero-texts h1 .title-line:first-child {
    display: inline;
}

.hero-texts h1 .title-line:not(:first-child) {
    display: block;
}

.hero-texts h1 .title-line.underlined {
    position: relative;
    display: inline-block;
    background-color: #f9fafb;
    padding: 0 8px;
    z-index: 1;
}

.hero-texts h1 .title-line.underlined::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 12px;
    background: rgba(59, 130, 246, 0.4);
    border-radius: 6px;
    transform: rotate(-1deg);
    transform-origin: left center;
    z-index: -1;
}

.hero-texts ul {
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;
}

.hero-texts ul li {
    padding: 8px 0;
    font-size: 1.1rem;
    color: #4b5563;
    display: flex;
    align-items: center;
    position: relative;
}

.hero-texts ul li::before {
    content: "";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: rgba(59, 130, 246, 0.1);
    margin-right: 12px;
    flex-shrink: 0;
    position: relative;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 12 12'%3E%3Cpath fill='none' stroke='%233b82f6' stroke-width='2' stroke-linecap='square' stroke-linejoin='miter' d='M2 6 L5 9 L10 2'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 9px 9px;
}

.hero-texts a {
    display: inline-block;
    padding: 14px 32px;
    margin-right: 12px;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    transition: all 0.3s ease;
    font-size: 1.1rem;
}

.hero-texts a:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.hero-texts a.kontakt {
    background-color: #3b82f6;
    color: white;
    border: 2px solid #3b82f6;
    border-radius: 30px;
    font-weight: 700;
}

.hero-texts a.kontakt:hover {
    background-color: #2563eb;
    border-color: #2563eb;
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.hero-texts a.služby {
    background-color: transparent;
    color: #3b82f6;
    border: 2px solid #3b82f6;
    border-radius: 30px;
}

.hero-texts a.služby:hover {
    background-color: rgba(59, 130, 246, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
}


/* Responsive */
@media (max-width: 768px) {
    #hero {
        min-height: auto;
        padding: 40px 0;
    }


    .hero-texts h1 {
        font-size: 2rem;
        max-width: 100%;
    }
    
    .hero-texts h1 .title-line {
        display: inline;
    }

    .hero-texts a {
        display: block;
        margin-bottom: 12px;
        text-align: center;
    }
}
</style>