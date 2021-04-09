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

export const GET_PRODUCTS_DATA = gql`
  query GetProductsData($categoryId: ID!) {
    getCategoryProducts(categoryId: $categoryId){
      products{
        id
        name 
        price 
        discountedPrice
        averageRating
        urlKey
        images{
         path
        }
      } 
    }
  }
`;

export const GET_PRODUCT_DATA = gql`
  query GetCarouselImages($route: String!) {
    resolveUnknownRoute(route: $route){
      id
      type
      item {
        ... on Product {
          id
          name
          images{
            path
          }
        }
      }
      breadcrumbs {
        label
        link
      }
    }
  }
`;
