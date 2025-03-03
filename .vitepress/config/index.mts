import { defineConfigWithTheme } from "vitepress";
import { shared } from "./shared";
import { ru } from "./ru";

export default defineConfigWithTheme({
  ...shared,
  locales: {
    root: { label: "Русский", ...ru },
  },
});
