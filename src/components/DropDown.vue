<template>
    <div class="search-pos-location custom-select" ref="dropDown">
        <div name="locations" id="locations" class="selected-location" @click="isDropDownVisible = true">
            <!-- <option v-for="(stateDatum, index) in stateData" :key="index" :value="stateDatum"
                            class="select-selected">{{ stateDatum
                            }}
                        </option> -->
            {{ mappedSelectedOption }}
        </div>
        <div class="options-wrapper" v-if="isDropDownVisible">
            <div class="option" v-for="(option, index) in props.options" :key="index"
                @click="toggleOptionSelect(option)">
                {{ option.name || option }}
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps, ref, computed, defineEmits, onMounted, onBeforeUnmount } from 'vue'

const dropDown = ref();


const props = defineProps({
    options: {
        type: Array,
        required: true,
    },
    modelValue: {
        default: null
    }
})

const emit = defineEmits(['update:modelValue'])

const selectedOption = ref();

const isDropDownVisible = ref(false);

const mappedSelectedOption = computed(() => {
    return (selectedOption.value?.name || selectedOption.value) || 'Please select something'
})

const toggleOptionSelect = (option) => {
    selectedOption.value = option;
    emit('updateModelValue', option)
    isDropDownVisible.value = false;
}

const closeDropDown = (element) => {
    if (!dropDown.value.contains(element.target)) {
        isDropDownVisible.value = false;
    }
}

onMounted(() => {
    window.addEventListener('click', () => {
        window.addEventListener('click', closeDropDown)
    })
})

onBeforeUnmount(() => {
    window.removeEventListener('click', closeDropDown)
})

</script>
<style scoped>
.custom-select {
    cursor: pointer;
    background: #FFF;
    border-radius: 0.8rem;
    position: relative !important;
    margin-left: 30px;
}

.selected-location {
    padding: 15px;
    border-radius: 1rem;
    box-sizing: border-box;
    outline: none;
    background-color: #F9F9FA;
}

.options-wrapper {
    height: 250px;
    overflow: scroll;
    position: absolute;
    top: 54px;
    z-index: 100;
    background-color: #FFF;
    width: 100%;
}

.option:hover {
    background: #F9F9FA;
    cursor: pointer;
}

.option {
    padding: 16px;
    box-sizing: border-box;
    width: 100%;
}
</style>