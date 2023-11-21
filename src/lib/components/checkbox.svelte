<script lang="ts">
  export let checked = false;
</script>

<label class="flex items-center cursor-pointer">
  <div class="checkbox w-6 h-6 bg-white border border-gray-600 rounded mr-3" class:checked>
    {#if checked}
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="w-full h-full">
        <path d="M5 10.273 10.833 16 20 7" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    {/if}
  </div>
  <input class="hidden" type="checkbox" bind:checked on:change />

  <div class="select-none">
    <slot />
  </div>
</label>

<style lang="postcss">
  .checkbox {
    transition-property: background-color, border-color;
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .checkbox.checked {
    @apply bg-secondary border-secondary;
  }

  .checkbox svg {
    stroke-dasharray: 26;
    stroke-dashoffset: 26;
    animation: check-draw 150ms linear forwards;
    animation-delay: 75ms;
  }

  @keyframes check-draw {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
