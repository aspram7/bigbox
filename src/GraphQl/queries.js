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
    getCategoryProducts(categoryId: $categoryId) {
      products {
        id
        name
        price
        discountedPrice
        averageRating
        urlKey
        images {
          path
        }
      }
    }
  }
`;

export const GET_PRODUCT_DATA = gql`
  query GetCarouselImages($route: String!) {
    resolveUnknownRoute(route: $route) {
      id
      type
      item {
        ... on Product {
          id
          name
          images {
            path
          }
          price
          discount
          discountType
          discountedPrice
          quantity
          description
          shortDescription
          sku
          averageRating
          reviewCount
          pageTitle
          metaDescription
        }
      }
      breadcrumbs {
        label
        link
      }
    }
  }
`;

export const GET_PRODUCT_REVIEWS = gql`
  query GetReviews($productId: String!) {
    productReviews(productId: $productId) {
      id
      name
      review
      rating
      productId
      status
    }
  }
`;

export const SET_PRODUCT_REVIEW = gql`
  mutation SetProductReview($name: String!, $productId: String, $rating: Float, $review: String) {
    addProductReview(
      reviewData: { name: $name, productId: $productId, rating: $rating, review: $review }
    )
  }
`;

export const CREATE_CART = gql`
  mutation CreateCart {
    createCart
  }
`;

export const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($cartId: String, $itemData: ConfigurableCartItemInputData) {
    addItemToCart(cartId: $cartId, itemData: $itemData) {
      id
      items {
        id
        quantity
        name
        thumbnail
        price
      }
    }
  }
`;

export const CART_QUERY = gql`
  query CartQuery($cartId: String!) {
    cart(cartId: $cartId) {
      id
      items {
        id
        quantity
        name
        thumbnail
        price
      }
    }
  }
`;

export const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($cartId: String, $itemId: String) {
    removeItemFromCart(cartId: $cartId, itemId: $itemId) {
      id
      items {
        id
        quantity
        name
        thumbnail
        price
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation SignUp($signUpData: SignUpInput!) {
    signUp(signUpData: $signUpData) {
      code
      userId
      shopName
      accessToken
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($username: String!, $password: String!) {
    signIn(username: $username, password: $password) {
      id
      email
      phone
      language
      firstName
      lastName
      shopId
      accessToken
      lastActionId
    }
  }
`;

export const SIGN_UP_CONFIRM = gql`
  mutation SignUpConfirm($username: String!, $confirmationCode: String!, $userId: String!) {
    signUpConfirm(username: $username, confirmationCode: $confirmationCode, userId: $userId)
  }
`;

export const CURRENT_CUSTOMER = gql`
  query CurrentCustomer {
    currentCustomer {
      id
      email
      phone
      language
      firstName
      lastName
      shopId
      accessToken
      lastActionId
    }
  }
`;
