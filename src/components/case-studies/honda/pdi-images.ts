// Centralized image paths & hotspot configurations for the Honda PDI Automation Case Study.
// Fill in paths here as screens become available (e.g. "/honda_pdi_1.png").
// When left empty (""), ImageSlot and PhoneSlot display clean, intentional blueprint frames.

export interface PdiImagePaths {
  // 00 Hero
  paperChecksheetFull: string;
  heroInitialCheck: string;
  heroFunctionalCheck: string;
  heroRoadTest: string;

  // 02 Where we started
  paperChecksheetCloseup: string;

  // 04 Roles & Switcher
  supervisorVehicleList: string;
  technicianAssignedList: string;
  adminChecklist: string;

  // 06 Decision 1 (Three guided inspection parts)
  initialCheckScreen: string;
  functionalCheckScreen: string;
  roadTestScreen: string;

  // 07 Decision 2 (Keep it simple)
  simpleStep1: string;
  simpleStep2: string;
  simpleStep3: string;

  // 08 Decision 3 (Walkthrough & Prototyping)
  figmaPrototypeOverview: string;

  // 09 Decision 4 (Supervisor handoff)
  supervisorMultiSelect: string;
  assignTechnicianList: string;
  supervisorFourViews: string;

  // 10 Decision 5 (Issues, repairs & loop)
  issuesListAfterPdi: string;
  completePdiScreen: string;
  notOkListScreen: string;
  jobCardScreen: string;

  // 11 Decision 6 (Admin checklist management)
  adminPerModelCheckpoints: string;
  adminVehicleTracking: string;

  // 12 Decision 7 (Design language integration)
  existingMyHondaScreen: string;
  pdiScreen: string;
}

export const pdiImages: PdiImagePaths = {
  // 00 Hero comparison
  paperChecksheetFull: "/PDISheet.png",
  heroInitialCheck: "/PDIIntialCheck.png",
  heroFunctionalCheck: "/honda_pdi_1.png",
  heroRoadTest: "/PDIRoadTest.png",

  // 02 Where we started
  paperChecksheetCloseup: "/PDISheet.png",

  // 04 Roles & Switcher
  supervisorVehicleList: "/honda_pdi_3.png",
  technicianAssignedList: "/honda_pdi_2.png",
  adminChecklist: "/PDIHMSIView.png",

  // 06 Decision 1 (Three guided inspection parts)
  initialCheckScreen: "/PDIIntialCheck.png",
  functionalCheckScreen: "/honda_pdi_1.png",
  roadTestScreen: "/PDIRoadTest.png",

  // 07 Decision 2 (Simplicity & clarity)
  simpleStep1: "/honda_pdi_2.png",
  simpleStep2: "/honda_pdi_1.png",
  simpleStep3: "/IssueReporting_PDI.png",

  // 08 Decision 3 (Figma Prototype overview)
  figmaPrototypeOverview: "/PDIPrototype.mov",

  // 09 Decision 4 (Supervisor handoff)
  supervisorMultiSelect: "/SupervisorDashboard_PDI.png",
  assignTechnicianList: "/AssignTechnician_PDI.png",
  supervisorFourViews: "/honda_pdi_3.png",

  // 10 Decision 5 (Full journey & repairs)
  issuesListAfterPdi: "/IssueReporting_PDI.png",
  completePdiScreen: "/CompletePDI.png",
  notOkListScreen: "/NotOkListPDI.png",
  jobCardScreen: "/JobCard_PDI.png",

  // 11 Decision 6 (Admin panel)
  adminPerModelCheckpoints: "/PDIChecklist.png",
  adminVehicleTracking: "/AdminPDITracking.png",

  // 12 Decision 7 (My Honda vs PDI)
  existingMyHondaScreen: "",
  pdiScreen: "/honda_pdi_1.png",
};

// Hotspot coordinates for Section 02 (Annotated Checksheet)
// Coordinates in percentage (0-100) relative to image container.
// Easily adjust x, y here once the high-res checksheet scan is placed.
export interface ChecksheetHotspot {
  id: string;
  number: number;
  label: string;
  explanation: string;
  x: number; // percentage from left
  y: number; // percentage from top
}

export const checksheetHotspots: ChecksheetHotspot[] = [
  {
    id: "hotspot-handwritten",
    number: 1,
    label: "Handwritten details",
    explanation: "Technicians wrote details by hand, such as the battery voltage and the frame and engine numbers.",
    x: 34,
    y: 18,
  },
  {
    id: "hotspot-ticks",
    number: 2,
    label: "Tick / X / NA",
    explanation: "Each checkpoint was marked with a tick, an X for a defect, or NA.",
    x: 64,
    y: 42,
  },
  {
    id: "hotspot-defects",
    number: 3,
    label: "Defect lines",
    explanation: "Defects were described on numbered lines at the bottom of the page.",
    x: 48,
    y: 74,
  },
  {
    id: "hotspot-signatures",
    number: 4,
    label: "Two signatures",
    explanation: "Both the service technician and the sales representative signed the page.",
    x: 76,
    y: 88,
  },
];
