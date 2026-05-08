export interface NormalizedError {
  name?: string;
  message: string;
  stack?: string;
}

export function normalizeError(error: unknown): NormalizedError {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
    };
  }

  if (typeof error === 'object' && error !== null) {
  try {
    return {
      message: JSON.stringify(error),
    };
  } catch {
    return {
      message: '[Unserializable object error]',
    };
  }
  }

return {
  message: String(error),
};
}

export function reportClientError(
  error: unknown,
  context?: string,
  metadata?: Record<string, unknown>
) {
  const normalized = normalizeError(error);

  console.error("[Client Error]", {
    context,
    metadata,
    timestamp: new Date().toISOString(),
    error: normalized,
  });
}