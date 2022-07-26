//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const trimmedMessage = message.trim();
  const isYelling =
    /[a-zA-Z]/g.test(trimmedMessage) &&
    trimmedMessage === trimmedMessage.toUpperCase();
  const isQuestion = trimmedMessage.slice(-1) === "?";
  if (trimmedMessage === "") return "Fine. Be that way!";
  else if (isYelling && isQuestion) return "Calm down, I know what I'm doing!";
  else if (isYelling) return "Whoa, chill out!";
  else if (isQuestion) return "Sure.";
  else if (!isYelling && !isQuestion) return "Whatever.";
};