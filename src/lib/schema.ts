import { site } from "@/lib/site";

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#practice`,
  name: site.name,
  url: site.url,
  image: `${site.url}/logo/develoop-logo-500.png`,
  description: site.description,
  areaServed: {
    "@type": "Country",
    name: "Australia",
  },
  priceRange: "A$4,000+",
  knowsLanguage: "en-AU",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Advisory engagements",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Delivery Systems Diagnostic",
        description:
          "Fixed-fee review of the delivery pipeline over 2 to 3 weeks. Starting fee.",
        url: `${site.url}/services/#diagnostic`,
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "6500",
          priceCurrency: "AUD",
        },
      },
      {
        "@type": "Offer",
        name: "Systems Build",
        description:
          "Tender protocols, consultant briefs and a documentation library. Starting fee for the full build.",
        url: `${site.url}/services/#systems`,
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "15000",
          priceCurrency: "AUD",
        },
      },
      {
        "@type": "Offer",
        name: "Implementation Retainer",
        description: "Rollout, training and KPI tracking. Starting monthly fee.",
        url: `${site.url}/services/#retainer`,
        priceCurrency: "AUD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          minPrice: "4000",
          priceCurrency: "AUD",
          unitText: "MONTH",
        },
      },
    ],
  },
} as const;
