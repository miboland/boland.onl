const title = "Michael Boland";
const description = "Full-stack developer, JavaScript enthusiast, and creator.";

const SEO = {
  title,
  description,
  canonical: "https://boland.onl",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://boland.onl",
    title,
    description,
    images: [
      {
        url: "https://boland.onl/static/images/og.jpg",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
