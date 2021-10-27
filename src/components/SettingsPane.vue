<template>
  <div>
    <button
      type="button"
      class="
        inline-flex
        justify-center
        w-full
        rounded-md
        px-4
        py-2
        text-sm
        font-medium
        text-gray-700
        hover:bg-blue-200
        bg-opacity-25
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        font-bold
      "
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
      @click="open = !open"
    >
      Settings
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </button>
    <transition name="menu">
      <div v-show="open" class="z-20 absolute right-4">
        <div
          class="
            origin-top-right
            mt-2
            w-72
            h-96
            rounded-lg
            shadow-lg
            bg-white
            ring-1 ring-black ring-opacity-5
            focus:outline-none
            overflow-auto
          "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <!-- Selection Page -->
          <div class="py-1" role="none" v-if="page == 'select'">
            <!-- Wheel names settings button -->
            <div
              class="hover:bg-gray-50 flex items-center p-4 cursor-pointer"
              @click="page = 'wheel-names'"
            >
              <div class="w-20 h-16 bg-yellow-100 rounded-xl flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 m-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgb(245, 158, 11)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div class="ml-4 text-left">
                <div class="font-lg font-bold">Wheel names</div>
                <div class="text-sm font-medium text-gray-500">
                  Edit the names are on the wheel
                </div>
              </div>
            </div>

            <!-- Developers settings button -->
            <div
              class="hover:bg-gray-50 flex items-center p-4 cursor-pointer"
              @click="page = 'developer'"
            >
              <div class="w-20 h-16 bg-green-100 rounded-xl flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 m-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="rgb(16, 185, 129)"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div class="ml-4 text-left">
                <div class="font-lg font-bold">Developer</div>
                <div class="text-sm font-medium text-gray-500">
                  Show off features of the spinner
                </div>
              </div>
            </div>
          </div>

          <!-- Back Button -->
          <div
            class="
              text-blue-500
              font-semibold
              cursor-pointer
              flex
              p-4
              pl-2
              hover:bg-gray-100
              rounded-t-lg
            "
            v-if="page != 'select'"
            @click="page = 'select'"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </div>

          <!-- Wheel Names Settings -->
          <div class="p-4 pt-0 text-left" v-if="page == 'wheel-names'">
            <h2 class="text-xl font-bold mb-2">Names</h2>
            <textarea
              class="
                focus:ring-yellow-500 focus:border-yellow-500
                w-full
                border-gray-400 border-1
                bg-transparent
                text-gray-500
                sm:text-sm
                rounded-md
                h-1/3
              "
              :value="wheelSettings.names"
              @change="wheelSettings.names = $event.target.value"
            />
            <label class="inline-flex items-center mt-3">
              <input
                type="checkbox"
                class="
                  form-checkbox
                  h-5
                  w-5
                  text-yellow-400
                  rounded-md
                  focus:ring-yellow-500 focus:border-yellow-500
                "
                v-model="wheelSettings.autoHideNames"
              /><span class="ml-2 text-gray-700 text-sm"
                >Auto-Hide Selected Names</span
              >
            </label>
            <h2 class="text-xl font-bold mt-2">Hidden Names</h2>
            <h3 class="text-sm font-medium">
              Add/delete names from this list to hide or unhide them.
            </h3>
            <textarea
              class="
                focus:ring-yellow-500 focus:border-yellow-500
                w-full
                border-gray-400 border-1
                bg-transparent
                text-gray-500
                sm:text-sm
                rounded-md
                h-1/3
                mt-2
              "
              :value="wheelSettings.hiddenNames"
              @change="wheelSettings.hiddenNames = $event.target.value"
            />
          </div>

          <!-- Developer Settings -->
          <div class="p-4 pt-0 text-left" v-if="page == 'developer'">
            <h2 class="text-xl font-bold mb-2">Developer Settings</h2>
            <label class="inline-flex items-center mt-3">
              <input
                type="checkbox"
                class="
                  form-checkbox
                  h-5
                  w-5
                  text-green-400
                  rounded-md
                  focus:ring-green-500 focus:border-green-500
                "
                v-model="developer.overrideNames"
              /><span class="ml-2 text-gray-700 text-sm">Override Names</span>
            </label>
            <label class="inline-flex items-center mt-3">
              <input
                type="range"
                min="0"
                max="90"
                v-model="developer.nameCount"
              />
              <span class="ml-2 text-gray-700 text-sm">
                Name Count: {{ developer.nameCount }}
              </span>
            </label>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'SettingsPane',

  data() {
    return {
      open: false,
      page: 'select',

      developer: {
        overrideNames: false,
        nameCount: 16,
      },

      wheelSettings: {
        names: '',
        autoHideNames: false,
        hiddenNames: '',
      },
    };
  },

  watch: {
    'developer.overrideNames': {
      handler(val) {
        store = {
          ...store,
          developerOverride: val,
        }
      },
    },
    'developer.nameCount': {
      handler(val) {
        store = {
          ...store,
          developerOverrideNameCount: Number(val),
        }
      },
    },

    'wheelSettings.names': {
      handler(val) {
        store = {
          ...store,
          names: val.split('\n'),
        }
      },
    },
    'wheelSettings.autoHideNames': {
      handler(val) {
        store = {
          ...store,
          autoHideNames: val
        }
      },
    },
    'wheelSettings.hiddenNames': {
      handler(val) {
        store = {
          ...store,
          hiddenNames: val.split('\n'),
        }
      },
    },
  },
};
</script>

<style>
.menu-enter-from {
  transition: opacity 0.1s ease-out, transform 0.1s ease-out;
  opacity: 0%;
  transform: scale(0.95);
  transform-origin: topright;
}

.menu-enter-to {
  transition: opacity 0.1s ease-out, transform 0.1s ease-out;
  opacity: 100%;
  transform: scale(1);
  transform-origin: top right;
}

.menu-leave-from {
  transition: opacity 0.1s ease-out, transform 0.1s ease-out;
  opacity: 100%;
  transform: scale(1);
  transform-origin: top right;
}

.menu-leave-to {
  transition: opacity 0.1s ease-out, transform 0.1s ease-out;
  opacity: 0%;
  transform: scale(0.95);
  transform-origin: top right;
}
</style>
