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
