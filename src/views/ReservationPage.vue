<template>
    <div class="reservationpage">
        <router-link :to="{name:'reservation-search'}" class="small-fab">
            <svg class="icon" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M49.2 44.2333L68.3 63.3333L63.3333 68.3L44.2333 49.2C40.6667 51.7667 36.3667 53.3333 31.6667 53.3333C19.7 53.3333 10 43.6333 10 31.6667C10 19.7 19.7 10 31.6667 10C43.6333 10 53.3333 19.7 53.3333 31.6667C53.3333 36.3667 51.7667 40.6667 49.2 44.2333ZM31.6667 16.6667C23.3667 16.6667 16.6667 23.3667 16.6667 31.6667C16.6667 39.9667 23.3667 46.6667 31.6667 46.6667C39.9667 46.6667 46.6667 39.9667 46.6667 31.6667C46.6667 23.3667 39.9667 16.6667 31.6667 16.6667Z"
                    fill="#6750A4" />
            </svg>

            <div class="buscar-reserva">Buscar reserva</div>
        </router-link>

        <router-link :to="{name:'reservation'}" class="small-fab2">
            <svg class="icon3" width="80" height="80" viewBox="0 0 80 80" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M66.6673 43.3334H43.334V66.6667H36.6673V43.3334H13.334V36.6667H36.6673V13.3334H43.334V36.6667H66.6673V43.3334Z"
                    fill="#6750A4" />
            </svg>

            <div class="buscar-reserva">Crear reserva</div>
        </router-link>
    </div>
</template>
<script>
/* Code generated with AutoHTML Plugin for Figma */

export default {
    name: "ReservationPage",
    components: {},
    props: {},
};
</script>
<style scoped>
.reservationpage,
.reservationpage * {
    box-sizing: border-box;
}

.reservationpage {
    background: #ffffff;
    width: 1920px;
    height: 640px;
    position: relative;
    overflow: hidden;
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
    top: 344px;
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

.buscar-reserva {
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
    top: 170px;
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
</style>