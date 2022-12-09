<script lang="ts">
  export let checked = false;
</script>

<label>
  <div class="checkbox" class:checked>
    {#if checked}
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 10.273 10.833 16 20 7" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    {/if}
  </div>
  <input type="checkbox" bind:checked on:change />

  <div class="text">
    <slot />
  </div>
</label>

<style>
  input[type=checkbox] {
    display: none;
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
    cursor: pointer;
  }

  .checkbox {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: var(--gap-3);
    background-color: var(--white);
    border: 1px solid var(--gray);
    border-radius: var(--gap-1);
    transition-property: background-color, border-color;
    transition-duration: 150ms;
    transition-timing-function: var(--cb);
  }

  .checkbox.checked {
    background-color: var(--secondary);
    border-color: var(--secondary);
  }

  .checkbox svg {
    width: 100%;
    height: 100%;
    stroke-dasharray: 26;
    stroke-dashoffset: 26;
    animation: check-draw 150ms linear forwards;
    animation-delay: 75ms;
  }

  .text {
    user-select: none;
  }

  @keyframes check-draw {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
