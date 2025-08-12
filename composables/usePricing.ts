import { ref } from "vue";

export const usePricing = () => {
  const pricingPlans = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  // New state to manage the active plan type
  const activePlanType = ref("monthly"); // Default to monthly

  const fetchPlans = async () => {
    isLoading.value = true;
    error.value = null;
    try {
      // Pass the activePlanType to the API endpoint
      const response = await $fetch(
        `/api/pricing?planType=${activePlanType.value}`
      );
      pricingPlans.value = response;
    } catch (err) {
      error.value = "Failed to fetch pricing plans.";
      console.error(err);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    pricingPlans,
    isLoading,
    error,
    activePlanType,
    fetchPlans,
  };
};
