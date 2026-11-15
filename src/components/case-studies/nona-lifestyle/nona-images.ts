// Centralized image paths & slot definitions for the NONA Lifestyle Case Study.
// Real screenshots are populated; empty strings render intentional blueprint frames.

export interface NonaImagePaths {
  // Hero & Flow
  heroBanner: string;
  userFlow: string;

  // Decision 1 & 2 (Grid & Cart)
  standardProductPage: string; // for before/after comparison
  nonaGridDesktop: string;      // /ProductsNova.png
  selectQuantity: string;       // /NONASelectQuantity.png
  gridErrorStates: string;      // minimum order warning state
  categoryBrowse: string;       // /LandingNova.png
  dynamicAutoCart: string;      // /CartNova.png

  // Decision 3 (Onboarding & Roles)
  roleSelection: string;
  otpScreen: string;
  businessDetailsGstin: string;

  // Decision 4 (Request for Quotation)
  rfqCategorySelect: string;
  rfqProjectDetails: string;
  rfqShippingDetails: string;
  rfqConfirmation?: string;

  // Decision 6 (Desktop & Mobile Responsive Views)
  gridMobile: string;
  categoryMobile: string;
  cartMobile: string;

  // Decision 12 (Business Dashboard & Admin Panel)
  dashboardHome: string;        // /HomeNona.png
  buyerManagement: string;      // /BuyerNona.png
  invoiceTracking: string;      // /InvoicesNona.png
  adminPanel: string;
}

export const nonaImages: NonaImagePaths = {
  // Hero & Flow
  heroBanner: "/NONA_Banner.png",
  userFlow: "/nona_lifestyle_user_flow.png",

  // Decision 1 & 2 (Grid & Cart)
  standardProductPage: "", // Shows clean "Add screen: Standard product page with one size dropdown" frame
  nonaGridDesktop: "/ProductsNova.png",
  selectQuantity: "/NONASelectQuantity.png",
  gridErrorStates: "",     // Shows clean "Add screen: Grid error states (minimum order warning)" frame
  categoryBrowse: "/NONACategoryDesktop.png",
  dynamicAutoCart: "/CartNova.png",

  // Decision 3 (Onboarding & Roles)
  roleSelection: "/NONARoles.png",
  otpScreen: "/NONAOTP.png",
  businessDetailsGstin: "/NONABusinessDetails.png",

  // Decision 4 (Request for Quotation)
  rfqCategorySelect: "/NONARFQ.png",
  rfqProjectDetails: "/NONATargetDetails.png",
  rfqShippingDetails: "/NONAShippingDetauls.png",
  rfqConfirmation: "/NONAShippingDetauls.png",

  // Decision 5 (Desktop & Mobile Responsive Views)
  gridMobile: "/NONAProductDetailsMobile.png",
  categoryMobile: "/NONACategoryMobile.png",
  cartMobile: "/NONACartMobile.png",

  // Decision 11 (Business Dashboard & Admin Panel)
  dashboardHome: "/HomeNona.png",
  buyerManagement: "/BuyerNona.png",
  invoiceTracking: "/InvoicesNona.png",
  adminPanel: "/NONAOrders.png",
};
