<template>
  <section
    class="relative py-16 px-8 max-w-6xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden"
  >
    <h2
      class="text-4xl font-extrabold text-gray-900 text-center mb-12 relative z-10"
    >
      A+ Tutoring Services – Frequently Asked Questions (FAQ)
    </h2>

    <div class="space-y-8 relative z-10">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
      >
        <button
          @click="toggleFAQ(index)"
          class="flex justify-between items-center w-full text-left py-5 px-7 focus:outline-none"
        >
          <span class="text-lg font-semibold text-gray-800">{{
            faq.question
          }}</span>
          <span
            class="transition transform"
            :class="[openIndex === index ? 'rotate-180' : '', 'text-[#91A65A]']"
          >
            <svg
              class="w-7 h-7 fill-none stroke-current"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </button>

        <div
          v-if="openIndex === index"
          class="px-7 pb-6 text-gray-700 leading-relaxed"
        >
          {{ faq.answer }}
        </div>
      </div>
    </div>

    <!-- Decorative elements -->
    <div
      class="absolute bottom-0 right-0 w-64 h-64 bg-[#91A65A] rounded-full -mr-24 -mb-24"
    ></div>
    <div class="absolute top-0 left-0 w-full h-full -z-20">
      <svg
        class="absolute top-1/4 left-1/4 w-32 h-32 text-[#91A65A] fill-current animate-pulse"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
      <svg
        class="absolute bottom-1/4 right-1/4 w-40 h-40 text-[#91A75A] fill-current animate-spin-slow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#92A75A"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      </svg>
    </div>
    <div
      class="absolute top-12 -left-20 w-64 h-64 bg-[#91A65A] rounded-full -mr-24 -mb-24 opacity-80"
    ></div>
    <div class="absolute top-0 left-0 w-full h-full -z-20">
      <svg
        class="absolute top-1/4 left-1/4 w-32 h-32 text-[#91A65A] fill-current animate-pulse"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
      </svg>
      <svg
        class="absolute bottom-1/4 right-1/4 w-40 h-40 text-[#91A75A] fill-current animate-spin-slow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#92A75A"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const openIndex = ref(null);

const faqs = ref([
    {
      question: "1. What subjects do you offer tutoring in?",
      answer: "We offer tutoring in core subjects including Math, English Reading, and Amharic Language tutoring. We also support SAT preparation, homework help, and study skills development.",
    },
    {
      question: "2. What grade levels do you work with?",
      answer: "We work with students from 2nd through 10th grade, as well as adult learners in specific cases.",
    },
    {
      question: "3. How are tutoring sessions delivered?",
      answer: "All our sessions are conducted online on Zoom, using interactive platforms that allow real-time engagement with tutors through video, audio, and collaborative tools.",
    },
    {
      question: "4. How do I get started?",
      answer: "Start by booking a free trial and assessment session by texting “TRIAL” on our phone number or sending us an email. After the assessment, we’ll recommend a personalized learning plan.",
    },
    {
      question: "5. How often are sessions held?",
      answer: "You can choose your schedule – most students attend 2–3 sessions per week, but we’re flexible based on your needs and goals.",
    },
    {
      question: "6. What are your prices?",
      answer: "Pricing varies depending on the package you choose. We offer affordable plans with discounts for longer-term commitments. Contact us for a full pricing guide.",
    },
    {
      question: "7. Can I change my schedule or pause my tutoring?",
      answer: "Yes, with advance notice. We schedule your sessions according to your needs, you would only have to let us know. As for rescheduling and pausing, we understand that life happens, and we’re happy to reschedule sessions or pause services if needed.",
    },
    {
      question: "8. Do you offer group sessions?",
      answer: "Most of our sessions are one-on-one to ensure personalized attention, but small group sessions are available for certain programs or upon request.",
    },
    {
      question: "9. What technology do I need for online tutoring?",
      answer: "You’ll need a reliable internet connection, a device (laptop, tablet, or desktop), and a quiet space for learning. We use platforms that are easy to access and require no special software.",
    },
    {
      question: "10. How do I track my child’s progress?",
      answer: "We provide regular updates, feedback from tutors, and periodic assessments to track your child’s improvement and adjust the learning plan as needed.",
    },
    {
      question: "11. What makes A+ Tutoring different?",
      answer: "We focus on personalized learning, qualified tutors, and supportive communication with families to ensure each child’s success—all at a highly affordable pricing.",
    },
]);

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index;
};
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
