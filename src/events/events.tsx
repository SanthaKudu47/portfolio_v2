type callBackType = (...params: []) => void;

const eventListeners = new Map<string, callBackType[]>();

export function registerEventListeners(
  eventName: "event",
  callBack: callBackType | null = null,
) {
  if (!eventName) return console.log("Event Name is Required");

  if (!callBack) return console.log("Event CallBack is Required");

  try {
    const getCurrentListeners = eventListeners.has(eventName);
    if (!getCurrentListeners) {
      eventListeners.set(eventName, [callBack]);
    } else {
      eventListeners.get(eventName)?.push(callBack);
    }
  } catch (error) {
    console.log("Failed to register event", eventName);
    console.log(error);
  }
}

export function dispatchEvent(name: string) {
  if (eventListeners.has(name)) {
    const callBacks = eventListeners.get(name);
    if (!callBacks) return console.log("No attached callbacks found");
    callBacks.forEach((func) => func());
  }
}
