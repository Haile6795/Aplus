To fix the button and the hover effect, you need to replace the entire content of `pages/pricing.vue` with the following corrected code.

The main issue was that the `ConsultationModal` component expects a prop named `:isOpen` to control its visibility, not `:show`. I have updated the code to use the correct prop name, which will make the button work as intended.

### Changes Made

  * **Modal Fix**: The `ConsultationModal` component was not receiving the correct prop to display. I have changed the prop from `:show` to `:isOpen` to match the component's internal logic, which is the fix that enables the modal to pop up when the button is clicked.
  * **Hover Effect**: I have added a `hover:bg-[#829A4D]` class to the button to create a hover effect that changes the background color to a darker shade of green.
  * **Final Code**: The complete, corrected code is provided below. You can simply replace the entire contents of `pages/pricing.vue` with this code.

<!-- end list -->

```vue
<template>
  <NuxtLayout name="layout">
    <div class="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-4" style="font-family: 'Poppins', sans-serif; color: #1e2755;">
          Simple, transparent pricing
        </h1>
        <p class="text-lg text-gray-600 mb-12">
          Choose the plan that's right for you and your family.
        </p>

        <div class="inline-flex rounded-lg bg-gray-200 p-1 mb-12">
          <button
            class="px-6 py-2 rounded-md font-semibold"
            :class="{
              'bg-white text-gray-900 shadow': activePlanType === 'monthly',
              'text-gray-500': activePlanType !== 'monthly',
            }"
            @click="activePlanType = 'monthly'"
          >
            Monthly
          </button>
          <button
            class="px-6 py-2 rounded-md font-semibold"
            :class="{
              'bg-white text-gray-900 shadow': activePlanType === 'yearly',
              'text-gray-500': activePlanType !== 'yearly',
            }"
            @click="activePlanType = 'yearly'"
          >
            Yearly
          </button>
        </div>

        <div v-if="activePlanType === 'monthly'" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="plan in monthlyPlans" :key="plan.service" class="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105">
            <h2 class="text-2xl font-bold mb-4 text-gray-900">{{ plan.service }}</h2>
            <div class="text-4xl font-bold text-gray-900 mb-6">
              ${{ plan.price }}
              <span class="text-base font-normal text-gray-500">/ monthly</span>
            </div>
            <ul class="text-left mb-8 space-y-2">
              <li v-for="feature in plan.features" :key="feature" class="flex items-center text-gray-600">
                <svg
                  class="h-5 w-5 text-[#92A75A] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {{ feature }}
              </li>
            </ul>
            <button
              class="w-full text-white font-semibold py-3 px-6 rounded-md transition duration-300 hover:bg-[#829A4D]"
              :style="{ 'background-color': '#92A75A' }"
              @click="openModal"
            >
              Get Started
            </button>
          </div>
        </div>

        <div v-if="activePlanType === 'yearly'" class="text-lg text-gray-600">
          </div>

        <div class="mt-20">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Available Discounts</h2>
          <ul class="text-lg text-gray-600 max-w-lg mx-auto space-y-2 text-left">
            <li class="flex items-center">
              <svg
                class="h-5 w-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                ></path>
              </svg>
              Sibling: 5% discount
            </li>
            <li class="flex items-center">
              <svg
                class="h-5 w-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5m-5 0a2 2 0 100-4m0 4a2 2 0 110-4m-9-4a4 4 0 100 8m-2-8a6 6 0 1110 3.75M4.5 12h11"
                ></path>
              </svg>
              Referral: 5% discount
            </li>
            <li class="flex items-center">
              <svg
                class="h-5 w-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              Advance Payment: 10% discount
            </li>
          </ul>
        </div>
      </div>
    </div>
  </NuxtLayout>
  <ConsultationModal :isOpen="isModalOpen" @close="isModalOpen = false" />
</template>

<script setup>
import { ref } from "vue";
import ConsultationModal from "~/components/ConsultationModal.vue";

const activePlanType = ref("monthly");
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const monthlyPlans = ref([
  {
    service: "Math and Reading",
    price: 159,
    features: ["2x a week"]
  },
  {
    service: "Math and Reading",
    price: 189,
    features: ["3x a week"]
  },
  {
    service: "Math and Reading",
    price: 275,
    features: ["5x a week"]
  },
  {
    service: "SAT",
    price: 219,
    features: ["3x a week"]
  },
  {
    service: "Homework Help",
    price: 99,
    features: [""]
  },
  {
    service: "Amharic",
    price: 129,
    features: ["3x a week"]
  },
  {
    service: "Tigrigna",
    price: 129,
    features: ["3x a week"]
  },
]);
</script>
```