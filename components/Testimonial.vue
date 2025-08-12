<template>
  <section class="py-16 bg-white overflow-hidden relative">
    <div class="container mx-auto px-4 relative">
      <!-- Decorative Dots Top Left -->
      <div class="absolute left-20 -top-8 rotate-[17deg]">
        <div class="grid grid-cols-5 gap-2">
          <template v-for="n in 25" :key="n">
            <div class="w-1.5 h-1.5 rounded-full bg-[#92A75A] opacity-40"></div>
          </template>
        </div>
      </div>

      <!-- Heading -->
      <div class="text-center mb-16 relative z-10">
        <h2 class="text-3xl font-bold text-[#1E2755]">Let's Hear</h2>
        <h3 class="text-3xl font-bold text-[#1E2755]">What They Say</h3>
      </div>

      <!-- Testimonials Loop -->
      <div class="relative max-w-3xl mx-auto">
        <!-- Quote SVG Top Left -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 320"
          fill="#92A75A"
          class="w-10"
        >
          <path
            d="M105.6 51.2 24 160v108.8h108.8V160H78.4l54.4-108.8zm190.4 0h-27.2L187.2 160v108.8H296V160h-54.4z"
          ></path>
        </svg>
        <div class="overflow-hidden relative">
          <div
            class="flex transition-transform duration-500"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              class="w-full flex-shrink-0"
              v-for="(testimonial, index) in testimonials"
              :key="index"
            >
              <!-- Testimonial Content -->
              <div class="text-center text-gray-600 space-y-4 px-8 relative">
                <p class="relative z-10">
                  {{ testimonial.testimonial }}
                </p>
              </div>

              <!-- Author -->
              <div class="text-center mt-12 relative z-10">
                <h4 class="text-xl font-semibold text-[#1E2755]">
                  {{ testimonial.name }}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Quote SVG Bottom Right -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 320"
          fill="#92A75A"
          class="absolute bottom-0 right-0 -mr-8 w-12 h-12 text-[#92A75A] transform rotate-180"
        >
          <path
            d="M105.6 51.2 24 160v108.8h108.8V160H78.4l54.4-108.8zm190.4 0h-27.2L187.2 160v108.8H296V160h-54.4z"
          ></path>
        </svg>

        <!-- Navigation Buttons -->
        <div class="absolute inset-y-0 left-0 flex items-center">
          <button
            class="p-2 bg-gray-200/50 rounded-full"
            @click="prevSlide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-left"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center">
          <button
            class="p-2 bg-gray-200/50 rounded-full"
            @click="nextSlide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-right"
            >
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Decorative Dots Bottom Right -->
      <div class="absolute right-20 bottom-16 -rotate-[17deg]">
        <div class="grid grid-cols-5 gap-2">
          <template v-for="n in 25" :key="n">
            <div class="w-1.5 h-1.5 rounded-full bg-[#92A75A] opacity-40"></div>
          </template>
        </div>
      </div>
      <!-- Wavy Background -->
      <svg
        class="absolute top-0 left-0 w-full h-full -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#EBF0D7"
          fill-opacity="0.5"
          d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,192C672,171,768,128,864,117.3C960,107,1056,128,1152,149.3C1248,171,1344,192,1392,202.7L1440,213L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const testimonials = ref([
  {
    name: "Tsega Tesfaye",
    testimonial: "AFFORDABLE & HIGH-QUALITY! My daughter has been tutoring with A + Tutoring for over a year now. We have noticed such a difference. We get three one - on - one sessions a week for the same price that we got group tutoring at other franchises. She became more confident in school, in math, and in reading. We didn’t think the remote sessions would be helpful but we were so wrong. We love that they care for kids and their education. We’re so happy we tried them out!",
  },
  {
    name: "Gebregwergs Kidanu",
    testimonial: "I highly recommend A plus tutoring as a tutor for any child. They are patient, knowledgeable, and able to explain concepts in a way that my children understands. They are very flexible and willing to work with my children schedule. My children has made great progress in Maths since they started tutoring with Lina and Bitst. I am very grateful for your help!!!",
  },
  {
    name: "Maedot Amha",
    testimonial: "My younger cousins have been enrolled in this program and their grades have improved!!!",
  },
  {
    name: "Rahel Teklemariam",
    testimonial: "I really love this program. The tutors have helped my daughter so well, and she is progressing at a very fast pace. The tutors also take the time to teach and make sure that the kids understand. I definitely recommend!",
  },
  {
    name: "Delina Woldu",
    testimonial: "My sister’s teacher noticed progress within two months of tutoring. I’m pleased with the tutors. They identified the fact that every kid has their own style of learning and they meet the different requirements of children. Great variety of tutors, they’re patient and great with kids. It’s rewarding to see the progress they made with my sister and the price is👌🏽",
  },
]);

const currentIndex = ref(0);
let interval = null;

const nextSlide = () => {
  if (testimonials.value.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
  }
};

const prevSlide = () => {
  if (testimonials.value.length > 0) {
    currentIndex.value =
      (currentIndex.value - 1 + testimonials.value.length) %
      testimonials.value.length;
  }
};

const startAutoSlide = () => {
  if (testimonials.value.length > 0) {
    interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
  }
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
button:focus {
  outline: none;
}
</style>
