import { css } from "styled-components"

export const variables = css`
  :root {
    /* Colors */
    --color-black-100: hsla(0, 0%, 0%, 1);
    --color-black-70: hsla(0, 0%, 0%, 0.7);
    --color-black-60: hsla(0, 0%, 0%, 0.6);
    --color-black-10: hsla(0, 0%, 0%, 0.1);
    --color-white-100: hsla(0, 0%, 100%, 1);
    --color-white-70: hsla(0, 0%, 100%, 0.7);
    --color-white-60: hsla(0, 0%, 100%, 0.6);
    --color-google-signin-100: hsla(
      217.41573033707866,
      89.00000000000001%,
      60.7843137254902%,
      1
    );
    --color-google-signin-90: hsla(
      217.41573033707866,
      89.00000000000001%,
      60.7843137254902%,
      0.9
    );
    --color-nav-link-black: var(--color-black-60);
    --color-nav-link-black-active: var(--color-black-100);
    --color-nav-link-white: var(--color-white-60);
    --color-nav-link-white-active: var(--color-white-100);
    --color-overlay-line-separator: hsla(0, 0%, 100%, 0.2);

    /* Fonts */
    --fs-cta-heading: 2.4rem;
    --fs-cta-heading-line-height: 3rem;
    --fs-cta-subheading: 1.5rem;
    --fs-cta-subheading-line-height: 2.6rem;
    --fs-cta-button: 1.5rem;
    --fs-big-nav-link-item: 1.4rem;
    --fs-brand: 2rem;
    --fs-user-actions: 1.4rem;
    --fs-searchbar: 1.4rem;
    --fs-overlay-buttons: 1.3rem;
    --fs-nav-link-item: 1.4rem;
    --fs-footer: 1rem;
    --fs-svg-icons: var(--fs-brand);
    --fs-product-title: 1.8rem;
    --fs-login: var(--fs-product-title);
    --fs-product-description: 1.3rem;
    --fs-product-ratings: 1.2rem;
    --fs-product-price: 2.4rem;
  }

  @media screen and (min-width: 45rem) {
    :root {
      --fs-cta-heading: 4rem;
      --fs-cta-heading-line-height: 5.7rem;
      --fs-cta-subheading: 1.8rem;
      --fs-cta-subheading-line-height: 2.8rem;
      --fs-product-title: 2.4rem;
      --fs-product-description: 1.5rem;
      --fs-product-ratings: 1.4rem;
      --fs-product-price: 2.4rem;
    }
  }
`
