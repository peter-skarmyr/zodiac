export type BirthdayRange = { from: DateWithoutYear; to: DateWithoutYear };

export interface DateWithoutYear {
  day: number;
  month: number;
}

export const formatBirthdayRange = (birthdayRange: BirthdayRange) =>
  `${formatDateWithoutYear(birthdayRange.from)} - ${formatDateWithoutYear(
    birthdayRange.to,
  )}`;

export const formatDateWithoutYear = (dateWithoutYear: DateWithoutYear) =>
  `${new Date(0, dateWithoutYear.month, dateWithoutYear.day).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: undefined,
    },
  )}`;
