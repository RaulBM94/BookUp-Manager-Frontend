<template>
  <div class="frame-40">
    <div class="rectangle-115"></div>

    <div class="frame-32">
      <div class="calendar">
        <div class="text-field">
          <div class="text-field2">
            <div class="state-layer">
              <div class="content">
                <div class="input-text">
                  <div class="input-text2">20/12/2022</div>
                </div>
              </div>

              <div class="trailing-icon">
                <div class="container">
                  <div class="state-layer2">
                    <svg class="icons-today_24px" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3 4.9 3 6V20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V9H19V20ZM6.5 13C6.5 11.62 7.62 10.5 9 10.5C10.38 10.5 11.5 11.62 11.5 13C11.5 14.38 10.38 15.5 9 15.5C7.62 15.5 6.5 14.38 6.5 13Z"
                        fill="#49454F" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="extended-fab-dark">
      <button class="state-layer3">
        <div class="label-text">BUSCAR</div>
      </button>
    </div>

    <div class="selecciona-fecha-de-reserva-">Selecciona fecha de reserva:</div>

    <div class="gesti-n-de-reservas">Gestión de reservas</div>
  </div>

</template>

<script>


export default {
  name: 'AboutView',
  
}
</script>


<style>
.frame-40,
.frame-40 * {
  box-sizing: border-box;
}

.frame-40 {
  background: #ffffff;
  width: 1920px;
  height: 1080px;
  position: relative;
  overflow: hidden;
}

.rectangle-115 {
  background: var(--purple200, #e3d4fd);
  border-radius: 20px;
  width: 477px;
  height: 616px;
  position: absolute;
  left: 721px;
  top: 158px;
}

.frame-32 {
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: flex-start;
  height: 76px;
  position: absolute;
  left: 814px;
  top: 300px;
}

.calendar {
  background: #f8f5ff;
  flex-shrink: 0;
  width: 288px;
  height: 76px;
  position: relative;
}

.text-field {
  background: #ffffff;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 288px;
  height: 56px;
  position: absolute;
  left: 0px;
  top: 0px;
}

.text-field2 {
  border-radius: 4px;
  border: solid var(--m3-sys-light-primary, #6750a4);
  border-width: 2px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.state-layer {
  border-radius: 4px 4px 0px 0px;
  padding: 4px 0px 4px 16px;
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
  flex-shrink: 0;
  position: relative;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 0px;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  height: 40px;
  position: relative;
}

.input-text {
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  position: relative;
}

.input-text2 {
  color: var(--m3-sys-light-on-surface, #1c1b1f);
  text-align: left;
  font: var(--m3-body-large, 400 16px/24px "Roboto", sans-serif);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.trailing-icon {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  position: relative;
}

.container {
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.state-layer2 {
  background: var(--m3-state-layers-light-on-surface-variant-opacity-0-12,
      rgba(73, 69, 79, 0.12));
  padding: 8px 8px 8px 8px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.icons-today_24px {
  flex-shrink: 0;
  position: relative;
  overflow: visible;
}

.extended-fab-dark {
  background: linear-gradient(to left,
      rgba(208, 188, 255, 0.11),
      rgba(208, 188, 255, 0.11)),
    linear-gradient(to left, #5200ff, #5200ff);
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 915px;
  top: 665px;
  box-shadow: var(--m3-elevationdark-3-box-shadow,
      0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 3px rgba(0, 0, 0, 0.15));
  overflow: hidden;
}

.state-layer3 {
  padding: 16px 20px 16px 16px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
}

.label-text {
  color: var(--m3-sys-dark-primary, #d0bcff);
  text-align: center;
  font: var(--m3-label-large, 500 14px/20px "Roboto", sans-serif);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.selecciona-fecha-de-reserva- {
  color: #000000;
  text-align: left;
  font: var(--roboto14px, 400 14px "Roboto", sans-serif);
  position: absolute;
  left: 816px;
  top: 277px;
  width: 289px;
  height: 16px;
}

.gesti-n-de-reservas {
  color: #000000;
  text-align: center;
  font: var(--roboto28, 400 28px "Roboto", sans-serif);
  position: absolute;
  left: 863px;
  top: 188px;
  width: 194px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>