import type { } from "react";

// Add extra fields supported by MUI
declare module "react" {
  interface FunctionComponent {
    muiName?: string
  }

  interface VoidFunctionComponent {
    muiName?: string
  }

  interface ExoticComponent {
    muiName?: string
  }

  interface Component {
    muiName?: string
  }
}