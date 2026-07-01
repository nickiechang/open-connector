import type { CredentialValidators, ProviderExecutors } from "../../core/types.ts";

import { defineApiKeyProviderExecutors } from "../provider-runtime.ts";
import { gladiaActionHandlers, validateGladiaCredential } from "./runtime.ts";

const service = "gladia";
export const executors: ProviderExecutors = defineApiKeyProviderExecutors(service, gladiaActionHandlers);

export const credentialValidators: CredentialValidators = {
  async apiKey(input, { fetcher, signal }) {
    return validateGladiaCredential(input, fetcher, signal);
  },
};
