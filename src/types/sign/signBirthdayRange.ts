import { Sign } from "./sign";
import { BirthdayRange } from "./birthdayRange";

export const signBirthdayRange: Record<Sign, BirthdayRange> = {
  Aquarius: { from: { day: 20, month: 1 }, to: { day: 18, month: 2 } },
  Pisces: { from: { day: 19, month: 2 }, to: { day: 20, month: 3 } },
  Aries: { from: { day: 21, month: 3 }, to: { day: 19, month: 4 } },
  Taurus: { from: { day: 20, month: 4 }, to: { day: 20, month: 5 } },
  Gemini: { from: { day: 21, month: 5 }, to: { day: 20, month: 6 } },
  Cancer: { from: { day: 21, month: 6 }, to: { day: 22, month: 7 } },
  Leo: { from: { day: 23, month: 7 }, to: { day: 22, month: 8 } },
  Virgo: { from: { day: 23, month: 8 }, to: { day: 22, month: 9 } },
  Libra: { from: { day: 23, month: 9 }, to: { day: 22, month: 10 } },
  Scorpio: { from: { day: 23, month: 10 }, to: { day: 21, month: 11 } },
  Sagittarius: { from: { day: 22, month: 11 }, to: { day: 21, month: 12 } },
  Capricorn: { from: { day: 22, month: 12 }, to: { day: 19, month: 1 } },
};
