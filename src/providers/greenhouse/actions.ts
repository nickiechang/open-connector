import type { ActionDefinition, JsonSchema } from "../../core/types.ts";

import { defineProviderAction } from "../../core/provider-definition.ts";
import { greenhouseGeneratedActionSchemas } from "./generated.ts";

const service = "greenhouse";

export type GreenhouseActionName = (typeof greenhouseGeneratedActionSchemas)[number]["name"];

export const greenhouseActions: ActionDefinition[] = greenhouseGeneratedActionSchemas.map((actionSchema) =>
  defineProviderAction(service, {
    name: actionSchema.name,
    description: actionSchema.description,
    requiredScopes: actionSchema.requiredScopes,
    providerPermissions: actionSchema.providerPermissions,
    inputSchema: actionSchema.inputSchema as JsonSchema,
    outputSchema: actionSchema.outputSchema as JsonSchema,
  }),
);
