export interface LineItem {
  id: number;
  label: string;
  enabled: boolean;
}

export function normalizeItems(items: LineItem[]): string[] {
  return items
    .filter((item) => item.enabled)
    .map((item) => item.label.trim())
    .sort((a, b) => a.localeCompare(b));
}

const sample: LineItem[] = [
  { id: 1, label: "  core-router  ", enabled: true },
  { id: 2, label: "auth-gateway", enabled: true },
  { id: 3, label: "legacy-proxy", enabled: false },
];

console.log(normalizeItems(sample));