export const thirdyDaysFromNow = (): Date =>
  new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds

export const fortyFiveMinutesFromNow = (): Date =>
  new Date(Date.now() + 45 * 60 * 1000); // 45 minutes in milliseconds
