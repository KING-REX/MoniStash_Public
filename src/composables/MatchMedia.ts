import { ref } from 'vue'

export const getValue = (breakpoint: number): boolean =>
    window.matchMedia(`(max-width: ${breakpoint}px)`).matches

export const matches768 = ref(getValue(768))
export const matches700 = ref(getValue(700))
export const matches540 = ref(getValue(540))
export const matches425 = ref(getValue(425))

window.onresize = () => {
    matches768.value = getValue(768)
    matches700.value = getValue(700)
    matches540.value = getValue(540)
    matches425.value = getValue(425)
}
