<script setup lang="ts"></script>

<template>
  <section class="section section-colored">
    <div class="section-body">
      <h2 class="section-title">Поддержите нас</h2>
      <div class="section-text">
        Пожертвования помогут улучшить инфраструктуру разработки, проведения
        мероприятий и поддержания работы команды. Каждый взнос имеет значение и
        позволяет нам делать больше.
      </div>
      <div class="section-action">
        <a class="VPButton medium brand" href="https://boosty.to/alt_gnome"
          >Свободная касса</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 64px 0;
  gap: 0;
  align-items: center;
  position: relative;
  z-index: 2;
  border-top: 1px solid var(--vp-c-gutter);
}

.section-body {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: fit-content;
  max-width: 640px;
  align-items: center;
  gap: 24px;
  text-align: center;
}
.section-title {
  font-size: 48px;
  line-height: 1.3;
}

.VPButton {
  display: inline-block;
  border: 1px solid transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition:
    color 0.25s,
    border-color 0.25s,
    background-color 0.25s;
}

.VPButton.brand {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.VPButton.medium {
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
}
</style>
