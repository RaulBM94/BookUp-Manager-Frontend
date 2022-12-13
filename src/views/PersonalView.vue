<template>
  <v-row class="desktop mx-auto my-12" justify="center">
    <div class="group-2608584">
      <router-link :to="{ name: 'reservation-home' }" class="small-fab">
        <svg class="icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M63.3333 13.3333H60V6.66663H53.3333V13.3333H26.6667V6.66663H20V13.3333H16.6667C12.9667 13.3333 10 16.3333 10 20V66.6666C10 70.3333 12.9667 73.3333 16.6667 73.3333H63.3333C67 73.3333 70 70.3333 70 66.6666V20C70 16.3333 67 13.3333 63.3333 13.3333ZM63.3333 66.6666H16.6667V30H63.3333V66.6666ZM21.6667 43.3333C21.6667 38.7333 25.4 35 30 35C34.6 35 38.3333 38.7333 38.3333 43.3333C38.3333 47.9333 34.6 51.6666 30 51.6666C25.4 51.6666 21.6667 47.9333 21.6667 43.3333Z"
            fill="#6750A4" />
        </svg>

        <div class="gestionar-reservas">Gestionar Reservas</div>
      </router-link>

      <button class="small-fab2">
        <div class="image-9"></div>

        <div class="gestionar-mesas">Gestionar Mesas</div>
      </button>

      <button class="small-fab3">
        <svg class="icon3" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M39.9994 6.66663C21.5993 6.66663 6.66602 21.6 6.66602 40C6.66602 58.4 21.5993 73.3333 39.9994 73.3333C58.3994 73.3333 73.3327 58.4 73.3327 40C73.3327 21.6 58.3994 6.66663 39.9994 6.66663ZM61.1994 56.1C56.4327 50.3 44.866 48.3333 39.9994 48.3333C35.1327 48.3333 23.566 50.3 18.7993 56.1C15.3993 51.6333 13.3327 46.0666 13.3327 40C13.3327 25.3 25.2994 13.3333 39.9994 13.3333C54.6994 13.3333 66.666 25.3 66.666 40C66.666 46.0666 64.5993 51.6333 61.1994 56.1ZM28.3327 31.6666C28.3327 25.2 33.5327 20 39.9994 20C46.466 20 51.666 25.2 51.666 31.6666C51.666 38.1333 46.466 43.3333 39.9994 43.3333C33.5327 43.3333 28.3327 38.1333 28.3327 31.6666Z"
            fill="#6750A4" />
        </svg>

        <div class="perfil">Perfil</div>
      </button>
    </div>
  </v-row>
</template>
<script>
export default {
};
</script>
<style scoped>
.desktop,
.desktop * {
  box-sizing: border-box;
}

.desktop {
  background: #ffffff;
  width: 1920px;
  height: 640px;
  position: relative;
  overflow: hidden;
}

.group-2608584 {
  width: 569px;
  height: 474px;
  position: static;
}

.small-fab {
  background: var(--m3-surfaces-light-surface3,
      linear-gradient(to left,
        rgba(103, 80, 164, 0.11),
        rgba(103, 80, 164, 0.11)),
      linear-gradient(to left, #fffbfe, #fffbfe));
  border-radius: 12px;
  padding: 16px 16px 16px 166px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
  width: 569px;
  height: 126px;
  position: absolute;
  left: 675px;
  top: 257px;
  box-shadow: var(--m3-elevationlight-3-box-shadow,
      0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 3px rgba(0, 0, 0, 0.15));
  overflow: hidden;
}

.icon {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.gestionar-reservas {
  color: #000000;
  text-align: left;
  font: var(--roboto32, 400 32px "Roboto", sans-serif);
  position: relative;
  width: 161px;
}

.small-fab2 {
  background: var(--m3-surfaces-light-surface3,
      linear-gradient(to left,
        rgba(103, 80, 164, 0.11),
        rgba(103, 80, 164, 0.11)),
      linear-gradient(to left, #fffbfe, #fffbfe));
  border-radius: 12px;
  padding: 16px 16px 16px 166px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
  width: 569px;
  height: 126px;
  position: absolute;
  left: 675px;
  top: 431px;
  box-shadow: var(--m3-elevationlight-3-box-shadow,
      0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 3px rgba(0, 0, 0, 0.15));
  overflow: hidden;
}

.image-9 {
  flex-shrink: 0;
  width: 77px;
  height: 59px;
  position: relative;
}

.gestionar-mesas {
  color: #000000;
  text-align: left;
  font: var(--roboto32, 400 32px "Roboto", sans-serif);
  position: relative;
  width: 161px;
}

.small-fab3 {
  background: var(--m3-surfaces-light-surface3,
      linear-gradient(to left,
        rgba(103, 80, 164, 0.11),
        rgba(103, 80, 164, 0.11)),
      linear-gradient(to left, #fffbfe, #fffbfe));
  border-radius: 12px;
  padding: 16px 227px 16px 166px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: flex-start;
  width: 569px;
  height: 126px;
  position: absolute;
  left: 675px;
  top: 83px;
  box-shadow: var(--m3-elevationlight-3-box-shadow,
      0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 3px rgba(0, 0, 0, 0.15));
  overflow: hidden;
}

.icon3 {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.perfil {
  color: #000000;
  text-align: left;
  font: var(--roboto32, 400 32px "Roboto", sans-serif);
  position: relative;
}
</style>