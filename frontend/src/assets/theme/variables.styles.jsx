import { css } from "styled-components";

export const variables = css`
  :root {
    /* Colors */

    --color-black-100: hsla(0, 0%, 0%, 1); /* Primary Color */
    --color-black-70: hsla(0, 0%, 0%, 0.7); /* Heading Color Black */
    --color-black-60: hsla(0, 0%, 0%, 0.6); /* Paragraph Color Black */

    --color-white-100: hsla(0, 0%, 100%, 1); /* Background Color - Body */
    --color-white-70: hsla(0, 0%, 100%, 0.7); /* Heading Color White */
    --color-white-60: hsla(0, 0%, 100%, 0.6); /* Paragraph Color White */

    /* Navigation Item color Black */
    --color-nav-link-black: var(--color-black-60);
    /* Navigation Item active color Black */
    --color-nav-link-black-active: var(--color-black-100);
    /* Navigation Item color White */
    --color-nav-link-white: var(--color-white-60);
    /* Navigation Item active color White */
    --color-nav-link-white-active: var(--color-white-100);

    --color-overlay-line-separator: hsla(0, 0%, 100%, 0.2);

    /* Fonts */

    --fs-cta-heading: 2.4rem;
    --fs-cta-subheading: 1.2rem;
    --fs-user-actions: 1.2rem;
    --fs-nav-link-item: 1.4rem;
    --fs-brand: 1.8rem;
    --fs-searchbar: 1.125rem;
    --fs-breadcrumbs: 1.8rem;
    --fs-login: 1.8rem;
    --fs-cta-button: 1rem;
    --fs-svg-icons: 1.6rem;
    --fs-footer: 1rem;
    --fs-overlay-buttons: 1.2rem;
  }

  @media (min-width: 25rem) {
    :root {
      --fs-brand: 2rem;
      --fs-cta-heading: 3.2rem;
      --fs-cta-subheading: 1.4rem;
      --fs-cta-button: 1.4rem;
      --fs-searchbar: 1.4rem;
      --fs-svg-icons: 2rem;
      --fs-footer: 1.2rem;
    }
  }

  @media (min-width: 33rem) {
    :root {
      --fs-brand: 2.6rem;
      --fs-login: 2.6rem;
      --fs-nav-link-item: 1.8rem;
      --fs-overlay-buttons: 1.6rem;
      --fs-svg-icons: 2.6rem;
      --fs-searchbar: 1.8rem;
      --fs-footer: 1.4rem;
      --fs-cta-heading: 4.2rem;
      --fs-cta-subheading: 1.6rem;
      --fs-cta-button: 1.8rem;
    }
  }

  @media (min-width: 92rem) {
    :root {
      /* Fonts */
      --fs-cta-heading: 7.2rem;
      --fs-cta-subheading: 2.4rem;
      --fs-nav-link-item: 1.8rem;
      --fs-brand: 3.6rem;
      --fs-searchbar: 1.4rem;
      --fs-breadcrumbs: 1.8rem;
    }
  }
`;
