// Centralized image paths & slot definitions for the Digital Seva Portal Case Study.
// Real screenshots are populated; empty strings render intentional blueprint frames.

export interface DigitalSevaImagePaths {
  // Hero & Overview
  heroBanner: string; // /DGSeva_Banner.png

  // Wireframes (Section 04)
  wireframe1: string; // /DSCWireframe1.png
  wireframe2: string; // /DSCWireframe2.png
  wireframeHomeFinalCompare: string; // /DSP_Home.png

  // Landing Page (Section 04)
  landingPageFull: string;
  landingPageFullCaption?: string;
  landingPageCloseup: string;
  landingPageCloseupCaption?: string;

  // Login Screen (Section 05)
  loginScreen: string;
  loginScreenCaption?: string;

  // First Design & Light Testing (Section 06 & 07)
  firstVersionPastel: string;
  finalVersionBright: string;
  iitHeatmap: string; // only rendered if populated

  // Decision 1 & 2 Comparisons (Section 08 & 09)
  pastelColorsVersion: string;
  brightColorsVersion: string;
  smallerTextVersion: string;
  largerTextVersion: string;

  // Decision 3: One home for every service (Section 10)
  homeServiceSelection: string; // /DSP_Home.png
  homeServiceSelectionView2: string;

  // Decision 4: A short, safe path to pay a bill (Section 11)
  billPaymentFlow: string; // /DSPBillPayment.png
  billPaymentFlowView2: string;
  payByWallet: string; // /DSP_Wallet.png
  payByWalletView2: string;

  // Other Screens Collage (Section 10)
  otherScreensCollage: string;
  otherScreensCollageCaption?: string;

  // Section 12: More Screens
  moreScreens: { src: string; caption?: string; label: string }[];
}

export const digitalSevaImages: DigitalSevaImagePaths = {
  // Hero & Overview
  heroBanner: "/DGSeva_Banner.png",

  // Wireframes (Section 04)
  wireframe1: "/DSCWireframe1.png",
  wireframe2: "/DSCWireframe2.png",
  wireframeHomeFinalCompare: "/DSP_Home.png",

  // Landing Page (Section 04) - populated with real screenshot
  landingPageFull: "/DSCLandingPage.png",
  landingPageFullCaption: "Landing page for rural entrepreneurs: Unified entrance designed to match the portal's visual language.",
  landingPageCloseup: "",
  landingPageCloseupCaption: undefined,

  // Login Screen (Section 05) - populated with real screenshot
  loginScreen: "/DSPLogin.png",
  loginScreenCaption: "Login screen: Clean, high-contrast authentication interface designed for quick and secure access.",

  // First Design & Light Testing (Section 05 & 06)
  firstVersionPastel: "/DSPPastelVersion.png",
  finalVersionBright: "/DSP_Home.png",
  iitHeatmap: "", // Only shown if an image exists

  // Decision 1 & 2 Comparisons (Section 07 & 08)
  pastelColorsVersion: "/DSPPastelVersion.png",
  brightColorsVersion: "/DSP_Home.png",
  smallerTextVersion: "",
  largerTextVersion: "",

  // Decision 3: One home for every service (Section 10)
  homeServiceSelection: "/DSP_Home.png",
  homeServiceSelectionView2: "",

  // Decision 4: A short, safe path to pay a bill (Section 11)
  billPaymentFlow: "/DSPBillPayment.png",
  billPaymentFlowView2: "",
  payByWallet: "/DSP_Wallet.png",
  payByWalletView2: "",

  // Other Screens Collage (Section 10)
  otherScreensCollage: "/DigitalSeva_Screens_Collage.png",
  otherScreensCollageCaption: "Other screens: Additional core portal flows, transaction summaries, and utility modules designed for village-level entrepreneurs.",

  // Section 12: More screens (only renders if non-empty)
  moreScreens: [],
};
