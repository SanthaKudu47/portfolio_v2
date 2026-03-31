export function formatDateTimeToDesktopView(date = new Date()) {
  return date
    .toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(",", "");
}

export function formatTimeToMobileView(date = new Date()) {
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
