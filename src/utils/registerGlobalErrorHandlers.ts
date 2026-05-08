import { reportClientError } from './errorReporting';

/**
 * Registers global browser-level error handlers
 * for unhandled async runtime failures.
 */
export function registerGlobalErrorHandlers() {
  if (typeof window === 'undefined') {
    return;
  }

  window.addEventListener('unhandledrejection', (event) => {
    reportClientError(event.reason, 'UnhandledPromiseRejection', {
      type: 'unhandledrejection',
    });
  });
}