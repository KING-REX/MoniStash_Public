<script setup lang="ts">
import IconSearch from '@/components/icons/IconSearch.vue'
import { onMounted, ref } from 'vue'

const formInput = ref<HTMLInputElement | null>(null)
const searchForm = ref<HTMLFormElement | null>(null)

onMounted(() => {
    // const formInput: HTMLInputElement | null = document.querySelector('#searchQueryField')
    // const searchForm: HTMLFormElement | null = document.querySelector('#searchBlogForm')

    if (formInput.value) {
        formInput.value.onfocus = function () {
            searchForm.value && searchForm.value.classList.add('active')
        }
        formInput.value.onblur = function () {
            searchForm.value && searchForm.value.classList.remove('active')
        }
    }
})
</script>

<template>
    <nav id="blogNav" class="container">
        <div class="links">
            <a href="#" class="link">Cryptocurrency</a>
            <a href="#" class="link">Digital News</a>
            <a href="#" class="link">Latest Updates</a>
            <a href="#" class="link">Assets</a>
            <a href="#" class="link">Rate</a>
        </div>
        <form action="" id="searchBlogForm" ref="searchForm">
            <div class="form-field">
                <label for="searchQueryField">
                    <!-- <img src="images/icons/search.svg" alt="Search icon" /> -->
                    <IconSearch />
                </label>
                <input
                    type="text"
                    id="searchQueryField"
                    placeholder="Search Blog, News, Updates"
                    ref="formInput"
                />
            </div>
        </form>
    </nav>
</template>

<style scoped>
/* BLOG NAV STYLES ********************************** */

nav#blogNav {
    padding: 30px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
}
nav#blogNav .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    width: calc(100% - 250px - 50px);
}
nav#blogNav .link {
    color: #222;
    font-size: 0.9rem;
}
nav#blogNav #searchBlogForm .form-field {
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: #f0f0f0;
    border-radius: 8px;
    width: 250px;
    padding: 5px 10px;
}
nav#blogNav #searchBlogForm .form-field > * {
    display: block;
}
nav#blogNav #searchBlogForm #searchQueryField {
    border: none;
    background-color: transparent;
    width: calc(100% - 39px);
    padding: 5px;
}
nav#blogNav #searchBlogForm #searchQueryField:focus {
    outline: none;
}
nav#blogNav #searchBlogForm #searchQueryField::placeholder {
    color: #222;
}

@media (max-width: 1024px) {
    nav#blogNav {
        gap: 10px;
    }
    nav#blogNav .links {
        gap: 10px;
    }
}

@media (max-width: 768px) {
    nav#blogNav {
        flex-direction: column;
        gap: 20px;
        padding: 30px 10px;
        position: relative;
    }
    nav#blogNav .links {
        gap: 20px;
        overflow-x: auto;
        width: 100%;
        padding: 10px 0;
        padding-right: 54px;
    }
    nav#blogNav .link {
        flex-shrink: 0;
    }

    nav#blogNav #searchBlogForm {
        position: absolute;
        top: 50%;
        right: 10px;
        left: calc(100% - 10px - 44px);
        transform: translateY(-50%);
        overflow: hidden;
        transition: left 0.2s;
    }
    nav#blogNav #searchBlogForm.active {
        left: 10px;
    }
    nav#blogNav #searchBlogForm .form-field {
        transition: width 0.2s;
        width: 100%;
    }
    nav#blogNav #searchBlogForm #searchQueryField {
        padding: 0;
    }
    nav#blogNav #searchBlogForm.active #searchQueryField {
        padding: 5px;
    }
}

@media (max-width: 425px) {
}
</style>
