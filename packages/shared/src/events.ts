export interface WBEvent<TType extends string, TPayload> {
  id: string;                 // ULID recommended
  type: TType;                // e.g. commerce.payment.completed
  ts: string;                 // ISO timestamp
  source: { service: string; instance?: string; version?: string };
  actor?: { kind: "user" | "agent" | "service"; id: string };
  correlationId?: string;
  idempotencyKey?: string;
  payload: TPayload;
}

export type CommercePaymentCompleted = WBEvent<
  "commerce.payment.completed",
  { orderId: string; amount: number; currency: string; provider: "stripe" | "other" }
>;

export type OnboardingProfileCreated = WBEvent<
  "onboarding.profile.created",
  { userId: string; email?: string; phone?: string }
>;
