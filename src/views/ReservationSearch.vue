<template>
    <div class="desktop">
        <svg class="vector" width="1921" height="340" viewBox="0 0 1921 340" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 293.561L46.4242 300.551C91.2475 307.541 182.495 321.52 273.742 279.582C366.591 237.645 457.838 139.791 549.086 153.77C640.333 167.749 731.581 293.561 822.828 328.509C914.076 363.457 1006.92 307.541 1098.17 307.541C1189.42 307.541 1280.67 363.457 1371.91 328.509C1463.16 293.561 1554.41 167.749 1647.26 146.781C1738.51 125.812 1829.75 209.687 1874.58 251.624L1921 293.561V0H1874.58C1829.75 0 1738.51 0 1647.26 0C1554.41 0 1463.16 0 1371.91 0C1280.67 0 1189.42 0 1098.17 0C1006.92 0 914.076 0 822.828 0C731.581 0 640.333 0 549.086 0C457.838 0 366.591 0 273.742 0C182.495 0 91.2475 0 46.4242 0H0V293.561Z"
                fill="#6D27C9" />
        </svg>

        <div class="rectangle-115" ></div>
        <div class="frame-32">
            <v-row class=" mx-0" hide-details="auto" justify="center">
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
                    transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="date" label="Selecciona una fecha" prepend-icon="mdi-calendar" readonly
                            v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                        <v-btn text color="primary" @click="menu = false">
                            Cancel
                        </v-btn>
                        <v-btn text color="primary" @click="$refs.menu.save(date)">
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-menu>
            </v-row>
        </div>
        <v-btn class="extended-fab-dark mx-0" justify="center" max-height="52px">
            <div class="state-layer3">
                <div class="label-text">BUSCAR</div>
            </div>
        </v-btn>


        <div class="buscar-reservas">Buscar reservas</div>
        <svg class="vector2" width="1941" height="385" viewBox="0 0 1941 385" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 171.111L40.4375 192.5C80.875 213.889 161.75 256.667 242.625 242.407C323.5 228.148 404.375 156.852 485.25 149.722C566.125 142.593 647 199.63 727.875 242.407C808.75 285.185 889.625 313.704 970.5 292.315C1051.38 270.926 1132.25 199.63 1213.12 199.63C1294 199.63 1374.88 270.926 1455.75 278.056C1536.62 285.185 1617.5 228.148 1698.38 171.111C1779.25 114.074 1860.12 57.037 1900.56 28.5185L1941 0V385H1900.56C1860.12 385 1779.25 385 1698.38 385C1617.5 385 1536.62 385 1455.75 385C1374.88 385 1294 385 1213.12 385C1132.25 385 1051.38 385 970.5 385C889.625 385 808.75 385 727.875 385C647 385 566.125 385 485.25 385C404.375 385 323.5 385 242.625 385C161.75 385 80.875 385 40.4375 385H0V171.111Z"
                fill="#6D27C9" />
        </svg>
    </div>
</template>
<script>

export default {
    data: () => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
    }),
    components: {},
    props: {},
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
    height: 1080px;
    position: relative;
    overflow: hidden;
}

.vector {
    position: absolute;
    left: 0px;
    top: 0px;
    overflow: visible;
}

.rectangle-115 {
    background: var(--purple200, #e3d4fd);
    border-radius: 20px;
    width: 477px;
    height: 616px;
    position: absolute;
    left: 721px;
    top: 158px;
    box-shadow: 0px 4px 30px 5px rgba(0, 0, 0, 0.25);
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

.buscar-reservas {
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

.vector2 {
    position: absolute;
    left: -20px;
    top: 701px;
    overflow: visible;
}

.colour {
    background-color: rgb(208, 188, 255)
}
</style>