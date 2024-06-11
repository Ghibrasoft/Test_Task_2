import { CARD_CONTENT } from "../assets/data/data";

export const getInitialSwitchStates = (isMobile: boolean) => {
  if (isMobile) {
    return {
      "Small Business": CARD_CONTENT.filter(({ type }) => type === "small").map(
        ({ title }) => title === "Zenefits"
      ),
      "Medium Business": CARD_CONTENT.filter(
        ({ type }) => type === "small"
      ).map(({ title }) => title === "Sapling" || title === "Workday"),
      Enterprise: CARD_CONTENT.filter(({ type }) => type === "small").map(
        () => true
      ),
    };
  } else {
    return {
      "Small Business": CARD_CONTENT.map(({ title }) => title === "Zenefits"),
      "Medium Business": CARD_CONTENT.map(
        ({ title }) => title === "Sapling" || title === "Workday"
      ),
      Enterprise: CARD_CONTENT.map(() => true),
    };
  }
};
