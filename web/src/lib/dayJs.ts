import lib from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

lib.extend(relativeTime);

export const dayjs = lib;

export function formatDate(date: string) {
  return dayjs(date).format("DD/MM/YYYY");
}
