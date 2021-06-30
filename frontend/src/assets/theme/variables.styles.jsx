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
    --fs-login: var(--fs-brand);
    --fs-svg-icons: var(--fs-brand);
  }

  @media screen and (min-width: 45rem) {
    :root {
      --fs-cta-heading: 4rem;
      --fs-cta-heading-line-height: 5.7rem;
      --fs-cta-subheading: 1.8rem;
      --fs-cta-subheading-line-height: 2.8rem;
    }
  }

  @media screen and (min-width: 60rem) {
    :root {
      /* Fonts */
      /* --fs-svg-icons: 4rem;
      --fs-cta-heading: 4.5rem;
      --fs-cta-subheading: 2.4rem;
      --fs-nav-link-item: 1.8rem;
      --fs-brand: 3.6rem;
      --fs-searchbar: 2.4rem;
      --fs-breadcrumbs: 1.8rem; */
    }
  }

  @media screen and (min-width: 72rem) {
    :root {
      /* --fs-cta-heading: 7.2rem; */
      /* --fs-cta-subheading: 3.2rem; */
    }
  }
`;
