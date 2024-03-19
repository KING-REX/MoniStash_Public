import { ref } from 'vue'

export const getValue = (breakpoint: number): boolean =>
    window.matchMedia(`(max-width: ${breakpoint}px)`).matches

export const matches1700 = ref(getValue(1700))
export const matches900 = ref(getValue(900))
export const matches768 = ref(getValue(768))
export const matches700 = ref(getValue(700))
export const matches540 = ref(getValue(540))
export const matches425 = ref(getValue(425))
export const matches320 = ref(getValue(320))

window.onresize = () => {
    matches1700.value = getValue(1700)
    matches900.value = getValue(900)
    matches768.value = getValue(768)
    matches700.value = getValue(700)
    matches540.value = getValue(540)
    matches425.value = getValue(425)
    matches320.value = getValue(320)
}
