let canViewThankYou = false

export function allowThankYouAccess() {
  if (typeof window !== 'undefined') {
    canViewThankYou = true
  }
}

export function canAccessThankYou() {
  return canViewThankYou
}