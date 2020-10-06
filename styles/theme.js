import React from "react";
import { theme as chakraTheme } from "@chakra-ui/core";

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  icons: {
    ...chakraTheme.icons,
    krishnamurti: {
      path: (
        <g fill="currentColor" stroke="currentColor" strokeWidth="2">
          <defs>
            <clipPath id="clip1">
              <path d="M 26.347656 135 L 348.75 135 L 348.75 236 L 26.347656 236 Z M 26.347656 135 " />
            </clipPath>
            <clipPath id="clip2">
              <path d="M 26.347656 0 L 348.75 0 L 348.75 100 L 26.347656 100 Z M 26.347656 0 " />
            </clipPath>
            <clipPath id="clip3">
              <path d="M 26.347656 275 L 348.75 275 L 348.75 375 L 26.347656 375 Z M 26.347656 275 " />
            </clipPath>
          </defs>
          <g id="surface1">
            <g clipPath="url(#clip1)" clipRule="nonzero">
              <path d="M 333.375 205.152344 C 236.125 205.152344 138.875 205.152344 41.628906 205.152344 C 46.714844 210.238281 51.804688 215.328125 56.890625 220.414062 C 56.890625 197.273438 56.890625 174.136719 56.890625 150.996094 C 51.804688 156.082031 46.714844 161.171875 41.628906 166.261719 C 138.875 166.261719 236.125 166.261719 333.375 166.261719 C 328.285156 161.171875 323.195312 156.082031 318.109375 150.996094 C 318.109375 174.136719 318.109375 197.273438 318.109375 220.414062 C 318.109375 240.101562 348.640625 240.101562 348.640625 220.414062 C 348.640625 197.273438 348.640625 174.136719 348.640625 150.996094 C 348.640625 142.671875 341.695312 135.730469 333.375 135.730469 C 236.125 135.730469 138.878906 135.730469 41.628906 135.730469 C 33.308594 135.730469 26.363281 142.671875 26.363281 150.996094 C 26.363281 174.136719 26.363281 197.273438 26.363281 220.414062 C 26.363281 228.734375 33.304688 235.683594 41.628906 235.683594 C 138.878906 235.683594 236.125 235.683594 333.375 235.683594 C 353.0625 235.683594 353.0625 205.152344 333.375 205.152344 Z M 333.375 205.152344 " />
            </g>
            <g clipPath="url(#clip2)" clipRule="nonzero">
              <path d="M 333.375 69.421875 C 236.125 69.421875 138.875 69.421875 41.628906 69.421875 C 46.714844 74.507812 51.804688 79.597656 56.890625 84.6875 C 56.890625 61.542969 56.890625 38.410156 56.890625 15.265625 C 51.804688 20.355469 46.714844 25.441406 41.628906 30.53125 C 138.875 30.53125 236.125 30.53125 333.375 30.53125 C 328.285156 25.441406 323.195312 20.355469 318.109375 15.265625 C 318.109375 38.40625 318.109375 61.542969 318.109375 84.6875 C 318.109375 104.375 348.640625 104.375 348.640625 84.6875 C 348.640625 61.542969 348.640625 38.410156 348.640625 15.265625 C 348.640625 6.941406 341.695312 0 333.375 0 C 236.125 0 138.875 0 41.628906 0 C 33.304688 0 26.363281 6.941406 26.363281 15.265625 C 26.363281 38.40625 26.363281 61.542969 26.363281 84.6875 C 26.363281 93.007812 33.304688 99.953125 41.628906 99.953125 C 138.875 99.953125 236.125 99.953125 333.375 99.953125 C 353.0625 99.953125 353.0625 69.421875 333.375 69.421875 Z M 333.375 69.421875 " />
            </g>
            <g clipPath="url(#clip3)" clipRule="nonzero">
              <path d="M 333.375 344.46875 C 236.125 344.46875 138.875 344.46875 41.628906 344.46875 C 46.714844 349.558594 51.804688 354.644531 56.890625 359.734375 C 56.890625 336.597656 56.890625 313.449219 56.890625 290.3125 C 51.804688 295.402344 46.714844 300.492188 41.628906 305.578125 C 138.875 305.578125 236.125 305.578125 333.375 305.578125 C 328.285156 300.488281 323.195312 295.402344 318.109375 290.3125 C 318.109375 313.449219 318.109375 336.597656 318.109375 359.734375 C 318.109375 379.421875 348.640625 379.421875 348.640625 359.734375 C 348.640625 336.597656 348.640625 313.449219 348.640625 290.3125 C 348.640625 281.996094 341.695312 275.046875 333.375 275.046875 C 236.125 275.046875 138.878906 275.046875 41.628906 275.046875 C 33.308594 275.046875 26.363281 281.996094 26.363281 290.3125 C 26.363281 313.449219 26.363281 336.597656 26.363281 359.734375 C 26.363281 368.050781 33.304688 375 41.628906 375 C 138.878906 375 236.125 375 333.375 375 C 353.0625 375 353.0625 344.46875 333.375 344.46875 Z M 333.375 344.46875 " />
            </g>
          </g>
        </g>
      ),
      viewBox: "0 0 375 374.999991",
    },
    github: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </g>
      ),
    },
    linkedin: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </g>
      ),
    },
    mail: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </g>
      ),
    },
  },
};

export default theme;
