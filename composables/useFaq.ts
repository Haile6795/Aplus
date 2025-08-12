import { ref } from "vue";

export const useFaq = () => {
  const faqs = ref([]);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchFaqs = async () => {
    try {
      isLoading.value = true;
      const response = await $fetch("/api/admin/faqs");
      // faqs.value = response;
      return response; // <-- This is the key fix for useAsyncData compatibility
    } catch (err) {
      error.value = err.message || "Failed to load FAQs";
      return [];
    } finally {
      isLoading.value = false;
    }
  };

  const addFaq = async (faq) => {
    try {
      isLoading.value = true;
      await $fetch("/api/admin/faqs", { method: "POST", body: faq });
    } catch (err) {
      error.value = err.message || "Failed to add FAQ";
    } finally {
      isLoading.value = false;
    }
  };

  const updateFaq = async (faq) => {
    try {
      isLoading.value = true;
      await $fetch("/api/admin/faqs", { method: "PUT", body: faq });
    } catch (err) {
      error.value = err.message || "Failed to update FAQ";
    } finally {
      isLoading.value = false;
    }
  };

  const deleteFaq = async (id) => {
    try {
      isLoading.value = true;
      await $fetch("/api/admin/faqs", { method: "DELETE", body: { id } });
    } catch (err) {
      error.value = err.message || "Failed to delete FAQ";
    } finally {
      isLoading.value = false;
    }
  };

  return { faqs, isLoading, error, fetchFaqs, addFaq, updateFaq, deleteFaq };
};
