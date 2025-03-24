export const getSkipCardImageName = (size) => {
  if (size <= 8) return "small-skipv2";
  if (size <= 14) return "medium-skip";
  if (size <= 20) return "large-skip";
  return "extralarge-skipv3";
};

export const getSkipModalImageName = (size) => {
  return `${size}-yard-skip-hire`;
};
