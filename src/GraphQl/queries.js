import { gql } from "@apollo/client";

export const GET_SLIDER_IMAGES = gql`
  query GetSliderImages($sliderId: String!) {
    slider(sliderId: $sliderId) {
      id
      name
      slides {
        id
        name
        image
        content
        contentPosition
        link
        linkType
      }
    }
  }
`;
