// Centralized image paths for the Osprey Case Study.
// Fill in paths here (e.g. "/images/osprey/new-creation.png").
// When left empty (""), the ImageSlot component displays a clean, intentional frame.

export interface OspreyImagePaths {
  // Hero
  heroBeforeOld: string;
  heroAfterNew: string;

  // 02 Where we started
  oldCreationForm: string;
  oldFieldFixList: string;
  oldDashboard: string;

  // 05 Decision 1
  newCreateFieldFix: string;

  // 06 Decision 2
  newCreateCftNumber: string;
  cftMasterRecords: string;

  // 07 Decision 3 (Role-specific detail screens)
  qmApproverDetail: string;
  cshqUserDetail: string;
  cshqApproverDetail: string;
  rcMarketProgress: string;
  gdVinStatusUpdate: string;

  // 08 Decision 4 (Search)
  headerSearch: string;
  fullSearchScreen: string;

  // 09 Decision 5 (Dashboards)
  qmDashboardFirstVersion: string;
  qmDashboardFinalTabs: string;
  qmDashboardBudget: string;
  qmDashboardPartDetails: string;
  qmDashboardPrepStatus: string;
  roleDashboards: string;

  // 11 Decision 7 (Performance & Lists)
  newFieldFixList: string;
  adminProgressReview: string;
  adminUserManagement: string;

  // 12 Decision 8 (Logo evolution)
  logoStep1Rough: string;
  logoStep2Research: string;
  logoOption1?: string;
  logoOption2?: string;
  logoOption3?: string;
  logoOption4?: string;
  logoStep4Final: string;
}

export const ospreyImages: OspreyImagePaths = {
  // Hero Before / After comparison
  heroBeforeOld: "/OldUI.png",
  heroAfterNew: "/NewUI.jpg",

  // 02 Where we started: Legacy UI slots
  oldCreationForm: "/OldFFCreationForm.png",
  oldFieldFixList: "/OldFFList.png",
  oldDashboard: "/OldUI.png",

  // 05 Decision 1: Create Field Fix (FALCON connection & 4 steps)
  newCreateFieldFix: "/NewFFCreationForm.png",

  // 06 Decision 2: Dedicated CFT Module
  newCreateCftNumber: "/FFCFTCodeForm.png",
  cftMasterRecords: "/FFCFTCodeTable.png",

  // 07 Decision 3: Role-specific detail interfaces
  qmApproverDetail: "/QMApproverFFDetail.png",
  cshqUserDetail: "/CSHQUserFFDetail.png",
  cshqApproverDetail: "/CSHQApproverFFDetail.png",
  rcMarketProgress: "/RCUserFFDetail.png",
  gdVinStatusUpdate: "/GDUserFFDetail.png",

  // 08 Decision 4: Search
  headerSearch: "/UniversalSearchFF_Header.png",
  fullSearchScreen: "/UniversalSearchFF_Screen.png",

  // 09 Decision 5: Dashboards
  qmDashboardFirstVersion: "",
  qmDashboardFinalTabs: "",
  qmDashboardBudget: "/Budget Monitoring 1.png",
  qmDashboardPartDetails: "/Parts Details 1.png",
  qmDashboardPrepStatus: "/Field Fix Preparation Status 1.png",
  roleDashboards: "/NewUI.jpg",

  // 11 Decision 7: Data tables & Admin
  newFieldFixList: "/NewFFList.png",
  adminProgressReview: "/FFAdminProgress.jpg",
  adminUserManagement: "/FFUserManag.jpg",

  // 12 Decision 8: Logo Stepper
  logoStep1Rough: "/OspreyRoughLogo.png",
  logoStep2Research: "",
  logoOption1: "/OspreyLogo1.png",
  logoOption2: "/OspreyLogo2.png",
  logoOption3: "/OspreyLogo3.png",
  logoOption4: "/OspreyLogo4.png",
  logoStep4Final: "/FFFinalLogo.png",
};
