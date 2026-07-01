import type { JsonSchema } from "../../core/types.ts";

export interface GreenhouseGeneratedActionSchema {
  name: string;
  description: string;
  requiredScopes: string[];
  providerPermissions: string[];
  inputSchema: JsonSchema;
  outputSchema: JsonSchema;
}

export const greenhouseGeneratedActionSchemas: GreenhouseGeneratedActionSchema[] = [
  {
    name: "list_jobs",
    description: "List Greenhouse jobs with optional status, department, and timestamp filters.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      type: "object",
      properties: {
        perPage: {
          type: "integer",
          minimum: 1,
          maximum: 500,
          description: "Maximum number of records to return in one response.",
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "Greenhouse page number to request.",
        },
        skipCount: {
          type: "boolean",
          description: "Whether to omit the last pagination link for faster list requests.",
        },
        createdBefore: {
          type: "string",
          minLength: 1,
          description: "Return only records created before this ISO-8601 timestamp.",
        },
        createdAfter: {
          type: "string",
          minLength: 1,
          description: "Return only records created at or after this ISO-8601 timestamp.",
        },
        updatedBefore: {
          type: "string",
          minLength: 1,
          description: "Return only records updated before this ISO-8601 timestamp.",
        },
        updatedAfter: {
          type: "string",
          minLength: 1,
          description: "Return only records updated at or after this ISO-8601 timestamp.",
        },
        status: {
          type: "string",
          enum: ["open", "closed", "draft"],
          description: "Return only jobs with this status.",
        },
        requisitionId: {
          type: "string",
          minLength: 1,
          description: "Return only jobs matching this requisition ID.",
        },
        openingId: {
          type: "string",
          minLength: 1,
          description: "Return only jobs containing this opening ID.",
        },
        departmentId: {
          anyOf: [
            {
              type: "integer",
              description: "Greenhouse numeric identifier.",
            },
            {
              type: "string",
              minLength: 1,
              description: "Greenhouse identifier as a string.",
            },
          ],
          description: "Return only jobs in this Greenhouse department.",
        },
        externalDepartmentId: {
          type: "string",
          minLength: 1,
          description: "Return only jobs in the department matching this external department ID.",
        },
      },
      additionalProperties: false,
      description: "Input for listing Greenhouse jobs.",
    },
    outputSchema: {
      type: "object",
      properties: {
        jobs: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                description: "Greenhouse job ID.",
              },
              name: {
                type: "string",
                description: "Job name.",
              },
              status: {
                type: "string",
                description: "Job status.",
              },
              requisition_id: {
                type: ["string", "null"],
                description: "Job requisition ID, if present.",
              },
              created_at: {
                type: "string",
                description: "Timestamp when the job was created.",
              },
              opened_at: {
                type: ["string", "null"],
                description: "Timestamp when the job was opened, if present.",
              },
              closed_at: {
                type: ["string", "null"],
                description: "Timestamp when the job was closed, if present.",
              },
            },
            additionalProperties: true,
            description: "A Greenhouse job record.",
          },
          description: "Greenhouse jobs returned for the requested page.",
        },
        links: {
          type: "object",
          properties: {
            next: {
              type: ["string", "null"],
              description: "URL for the next page, if present.",
            },
            prev: {
              type: ["string", "null"],
              description: "URL for the previous page, if present.",
            },
            last: {
              type: ["string", "null"],
              description: "URL for the last page, if present.",
            },
          },
          required: ["next", "prev", "last"],
          additionalProperties: false,
          description: "Greenhouse pagination links parsed from the Link response header.",
        },
        raw: {
          description: "Raw Greenhouse jobs response.",
        },
      },
      required: ["jobs", "links", "raw"],
      additionalProperties: false,
      description: "Greenhouse job list output.",
    },
  },
  {
    name: "get_job",
    description: "Retrieve one Greenhouse job by ID.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      type: "object",
      properties: {
        id: {
          anyOf: [
            {
              type: "integer",
              description: "Greenhouse numeric identifier.",
            },
            {
              type: "string",
              minLength: 1,
              description: "Greenhouse identifier as a string.",
            },
          ],
          description: "The job ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
      description: "Input for retrieving one Greenhouse job.",
    },
    outputSchema: {
      type: "object",
      properties: {
        job: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "Greenhouse job ID.",
            },
            name: {
              type: "string",
              description: "Job name.",
            },
            status: {
              type: "string",
              description: "Job status.",
            },
            requisition_id: {
              type: ["string", "null"],
              description: "Job requisition ID, if present.",
            },
            created_at: {
              type: "string",
              description: "Timestamp when the job was created.",
            },
            opened_at: {
              type: ["string", "null"],
              description: "Timestamp when the job was opened, if present.",
            },
            closed_at: {
              type: ["string", "null"],
              description: "Timestamp when the job was closed, if present.",
            },
          },
          additionalProperties: true,
          description: "A Greenhouse job record.",
        },
        raw: {
          description: "Raw Greenhouse job response.",
        },
      },
      required: ["job", "raw"],
      additionalProperties: false,
      description: "Greenhouse job output.",
    },
  },
  {
    name: "list_candidates",
    description: "List Greenhouse candidates with optional job, email, candidate ID, and timestamp filters.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      type: "object",
      properties: {
        perPage: {
          type: "integer",
          minimum: 1,
          maximum: 500,
          description: "Maximum number of records to return in one response.",
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "Greenhouse page number to request.",
        },
        skipCount: {
          type: "boolean",
          description: "Whether to omit the last pagination link for faster list requests.",
        },
        createdBefore: {
          type: "string",
          minLength: 1,
          description: "Return only records created before this ISO-8601 timestamp.",
        },
        createdAfter: {
          type: "string",
          minLength: 1,
          description: "Return only records created at or after this ISO-8601 timestamp.",
        },
        updatedBefore: {
          type: "string",
          minLength: 1,
          description: "Return only records updated before this ISO-8601 timestamp.",
        },
        updatedAfter: {
          type: "string",
          minLength: 1,
          description: "Return only records updated at or after this ISO-8601 timestamp.",
        },
        jobId: {
          anyOf: [
            {
              type: "integer",
              description: "Greenhouse numeric identifier.",
            },
            {
              type: "string",
              minLength: 1,
              description: "Greenhouse identifier as a string.",
            },
          ],
          description: "Return only candidates who have applied to this job.",
        },
        email: {
          type: "string",
          minLength: 1,
          description: "Return only candidates with this email address.",
        },
        candidateIds: {
          type: "array",
          items: {
            anyOf: [
              {
                type: "integer",
                description: "Greenhouse numeric identifier.",
              },
              {
                type: "string",
                minLength: 1,
                description: "Greenhouse identifier as a string.",
              },
            ],
            description: "A Greenhouse candidate ID.",
          },
          minItems: 1,
          maxItems: 50,
          description: "Return only candidates with these IDs. Greenhouse accepts up to 50 candidate IDs.",
        },
      },
      additionalProperties: false,
      description: "Input for listing Greenhouse candidates.",
    },
    outputSchema: {
      type: "object",
      properties: {
        candidates: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                description: "Greenhouse candidate ID.",
              },
              first_name: {
                type: ["string", "null"],
                description: "Candidate first name.",
              },
              last_name: {
                type: ["string", "null"],
                description: "Candidate last name.",
              },
              company: {
                type: ["string", "null"],
                description: "Candidate company.",
              },
              title: {
                type: ["string", "null"],
                description: "Candidate title.",
              },
              created_at: {
                type: "string",
                description: "Timestamp when the candidate was created.",
              },
              updated_at: {
                type: "string",
                description: "Timestamp when the candidate was last updated.",
              },
            },
            additionalProperties: true,
            description: "A Greenhouse candidate record.",
          },
          description: "Greenhouse candidates returned for the requested page.",
        },
        links: {
          type: "object",
          properties: {
            next: {
              type: ["string", "null"],
              description: "URL for the next page, if present.",
            },
            prev: {
              type: ["string", "null"],
              description: "URL for the previous page, if present.",
            },
            last: {
              type: ["string", "null"],
              description: "URL for the last page, if present.",
            },
          },
          required: ["next", "prev", "last"],
          additionalProperties: false,
          description: "Greenhouse pagination links parsed from the Link response header.",
        },
        raw: {
          description: "Raw Greenhouse candidates response.",
        },
      },
      required: ["candidates", "links", "raw"],
      additionalProperties: false,
      description: "Greenhouse candidate list output.",
    },
  },
  {
    name: "get_candidate",
    description: "Retrieve one Greenhouse candidate by ID.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      type: "object",
      properties: {
        id: {
          anyOf: [
            {
              type: "integer",
              description: "Greenhouse numeric identifier.",
            },
            {
              type: "string",
              minLength: 1,
              description: "Greenhouse identifier as a string.",
            },
          ],
          description: "The candidate ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
      description: "Input for retrieving one Greenhouse candidate.",
    },
    outputSchema: {
      type: "object",
      properties: {
        candidate: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "Greenhouse candidate ID.",
            },
            first_name: {
              type: ["string", "null"],
              description: "Candidate first name.",
            },
            last_name: {
              type: ["string", "null"],
              description: "Candidate last name.",
            },
            company: {
              type: ["string", "null"],
              description: "Candidate company.",
            },
            title: {
              type: ["string", "null"],
              description: "Candidate title.",
            },
            created_at: {
              type: "string",
              description: "Timestamp when the candidate was created.",
            },
            updated_at: {
              type: "string",
              description: "Timestamp when the candidate was last updated.",
            },
          },
          additionalProperties: true,
          description: "A Greenhouse candidate record.",
        },
        raw: {
          description: "Raw Greenhouse candidate response.",
        },
      },
      required: ["candidate", "raw"],
      additionalProperties: false,
      description: "Greenhouse candidate output.",
    },
  },
  {
    name: "list_applications",
    description: "List Greenhouse applications with optional candidate, job, and status filters.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      type: "object",
      properties: {
        perPage: {
          type: "integer",
          minimum: 1,
          maximum: 500,
          description: "Maximum number of records to return in one response.",
        },
        page: {
          type: "integer",
          minimum: 1,
          description: "Greenhouse page number to request.",
        },
        skipCount: {
          type: "boolean",
          description: "Whether to omit the last pagination link for faster list requests.",
        },
        candidateId: {
          anyOf: [
            {
              type: "integer",
              description: "Greenhouse numeric identifier.",
            },
            {
              type: "string",
              minLength: 1,
              description: "Greenhouse identifier as a string.",
            },
          ],
          description: "Return only applications for this candidate.",
        },
        jobId: {
          anyOf: [
            {
              type: "integer",
              description: "Greenhouse numeric identifier.",
            },
            {
              type: "string",
              minLength: 1,
              description: "Greenhouse identifier as a string.",
            },
          ],
          description: "Return only applications for this job.",
        },
        status: {
          type: "string",
          minLength: 1,
          description: "Return only applications with this Greenhouse status.",
        },
      },
      additionalProperties: false,
      description: "Input for listing Greenhouse applications.",
    },
    outputSchema: {
      type: "object",
      properties: {
        applications: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                description: "Greenhouse application ID.",
              },
              candidate_id: {
                type: "integer",
                description: "Greenhouse candidate ID associated with this application.",
              },
              applied_at: {
                type: ["string", "null"],
                description: "Timestamp when the candidate applied, if present.",
              },
              rejected_at: {
                type: ["string", "null"],
                description: "Timestamp when the application was rejected, if present.",
              },
              status: {
                type: "string",
                description: "Application status.",
              },
            },
            additionalProperties: true,
            description: "A Greenhouse application record.",
          },
          description: "Greenhouse applications returned for the requested page.",
        },
        links: {
          type: "object",
          properties: {
            next: {
              type: ["string", "null"],
              description: "URL for the next page, if present.",
            },
            prev: {
              type: ["string", "null"],
              description: "URL for the previous page, if present.",
            },
            last: {
              type: ["string", "null"],
              description: "URL for the last page, if present.",
            },
          },
          required: ["next", "prev", "last"],
          additionalProperties: false,
          description: "Greenhouse pagination links parsed from the Link response header.",
        },
        raw: {
          description: "Raw Greenhouse applications response.",
        },
      },
      required: ["applications", "links", "raw"],
      additionalProperties: false,
      description: "Greenhouse application list output.",
    },
  },
  {
    name: "get_application",
    description: "Retrieve one Greenhouse application by ID.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      type: "object",
      properties: {
        id: {
          anyOf: [
            {
              type: "integer",
              description: "Greenhouse numeric identifier.",
            },
            {
              type: "string",
              minLength: 1,
              description: "Greenhouse identifier as a string.",
            },
          ],
          description: "The application ID.",
        },
      },
      required: ["id"],
      additionalProperties: false,
      description: "Input for retrieving one Greenhouse application.",
    },
    outputSchema: {
      type: "object",
      properties: {
        application: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "Greenhouse application ID.",
            },
            candidate_id: {
              type: "integer",
              description: "Greenhouse candidate ID associated with this application.",
            },
            applied_at: {
              type: ["string", "null"],
              description: "Timestamp when the candidate applied, if present.",
            },
            rejected_at: {
              type: ["string", "null"],
              description: "Timestamp when the application was rejected, if present.",
            },
            status: {
              type: "string",
              description: "Application status.",
            },
          },
          additionalProperties: true,
          description: "A Greenhouse application record.",
        },
        raw: {
          description: "Raw Greenhouse application response.",
        },
      },
      required: ["application", "raw"],
      additionalProperties: false,
      description: "Greenhouse application output.",
    },
  },
  {
    name: "add_candidate_note",
    description: "Create a Greenhouse candidate activity feed note using an explicit On-Behalf-Of audit user.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      type: "object",
      properties: {
        candidateId: {
          anyOf: [
            {
              type: "integer",
              description: "Greenhouse numeric identifier.",
            },
            {
              type: "string",
              minLength: 1,
              description: "Greenhouse identifier as a string.",
            },
          ],
          description: "The Greenhouse candidate ID that receives the note.",
        },
        onBehalfOfUserId: {
          anyOf: [
            {
              type: "integer",
              description: "Greenhouse numeric identifier.",
            },
            {
              type: "string",
              minLength: 1,
              description: "Greenhouse identifier as a string.",
            },
          ],
          description: "The Greenhouse user ID supplied in the required On-Behalf-Of audit header.",
        },
        body: {
          type: "string",
          minLength: 1,
          description: "The note body to add to the candidate activity feed.",
        },
        visibility: {
          type: "string",
          enum: ["admin_only", "private", "public"],
          description: "The Greenhouse note visibility.",
        },
      },
      required: ["candidateId", "onBehalfOfUserId", "body", "visibility"],
      additionalProperties: false,
      description: "Input for creating a Greenhouse candidate note.",
    },
    outputSchema: {
      type: "object",
      properties: {
        note: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              description: "Greenhouse note ID.",
            },
            body: {
              type: "string",
              description: "Greenhouse note body.",
            },
            visibility: {
              type: "string",
              description: "Greenhouse note visibility.",
            },
            created_at: {
              type: "string",
              description: "Timestamp when the note was created.",
            },
          },
          additionalProperties: true,
          description: "A Greenhouse candidate activity feed note.",
        },
        raw: {
          description: "Raw Greenhouse candidate note response.",
        },
      },
      required: ["note", "raw"],
      additionalProperties: false,
      description: "Greenhouse candidate note output.",
    },
  },
];
