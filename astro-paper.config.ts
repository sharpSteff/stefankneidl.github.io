import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://sharpsteff.github.io",
    title: "sharpSteff's Blog",
    description: "Software engineer writing about .NET, WPF, and open-source development.",
    author: "sharpSteff",
    profile: "https://github.com/sharpsteff",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Vienna",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/sharpsteff" },
    { name: "linkedin", url: "https://www.linkedin.com/in/stefan-kneidl-4487751a2" },
    { name: "mail",     url: "mailto:sharp.kneidl@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});