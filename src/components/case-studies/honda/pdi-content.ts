// EXAMPLE DATA: replace with the real moves or delete
// This file isolates the sample checkpoint data used in the Section 06 Checkpoint Sorter interaction.

export type CheckpointCategory = "initial" | "functional" | "road";

export interface CheckpointMove {
  id: string;
  name: string;
  firstDraft: CheckpointCategory;
  finalCategory: CheckpointCategory;
  firstDraftLabel: string;
  finalCategoryLabel: string;
  reason: string;
}

export const exampleCheckpoints: CheckpointMove[] = [
  {
    id: "battery-voltage",
    name: "Battery voltage",
    firstDraft: "functional",
    finalCategory: "initial",
    firstDraftLabel: "Functional check",
    finalCategoryLabel: "Initial check",
    reason: "It is measured before the vehicle is switched on.",
  },
  {
    id: "horn",
    name: "Horn",
    firstDraft: "road",
    finalCategory: "functional",
    firstDraftLabel: "Road test",
    finalCategoryLabel: "Functional check",
    reason: "It is tested while the vehicle is standing still.",
  },
  {
    id: "oil-level",
    name: "Oil level",
    firstDraft: "functional",
    finalCategory: "initial",
    firstDraftLabel: "Functional check",
    finalCategoryLabel: "Initial check",
    reason: "It is a quick look before anything else starts.",
  },
];
