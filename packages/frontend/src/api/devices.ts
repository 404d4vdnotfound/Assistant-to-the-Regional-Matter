import type { EndpointData } from "@Assistant-to-the-Regional-Matter/common";

export async function fetchDevices(bridgeId: string) {
  const response = await fetch(`api/matter/bridges/${bridgeId}/devices`);
  const json = await response.json();
  return json as EndpointData;
}
