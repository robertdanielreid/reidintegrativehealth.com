import { groq } from "next-sanity";

export const homepageQuery = groq`
  *[_type == "page" && slug.current == "home"][0] {
    ...,
    sections[] {
      ...,
      _type == "hero" => {
        ...,
        bgImage {
          asset->
        }
      },
      _type == "section" => {
        ...,
        featureCards[] {
          ...
        }
      },
      _type == "cta" => {
        ...
      },
      _type == "testimonials" => {
        ...,
        testimonialItems[] -> {
          ...
        }
      }
    }
  }
`;

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    ...,
    logo {
      asset->
    }
  }
`;

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    ...,
    sections[] {
      ...,
      _type == "hero" => {
        ...,
        bgImage {
          asset->
        }
      },
      _type == "section" => {
        ...,
        featureCards[] {
          ...
        }
      },
      _type == "cta" => {
        ...
      },
      _type == "testimonials" => {
        ...,
        testimonialItems[] -> {
          ...
        }
      }
    }
  }
`;

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    mainImage,
    publishedAt,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..200], "") + "..."
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    ...,
    mainImage {
      asset->
    }
  }
`;
