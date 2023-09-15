import { ProductViewModel } from "app/store/reducers/products/types/typedef";
import { getStaticUrl } from "shared/utils";

export const mapProductToView = (product: ProductViewModel) => {
  const { images, price, discount, currency } = product;

  const productMainPhoto = images?.length ? getStaticUrl(images[0].source) : "/img/default_product.png";

  const availableSizes =
    product.availableSizes.length <= 2
      ? product.availableSizes.join(" ")
      : `${product.availableSizes.slice(2).join(" ")} ...`;

  const priceWithCurrency = price + currency;
  const discountWithCurrency = discount + currency;

  return {
    productMainPhoto,
    availableSizes,
    priceWithCurrency,
    discountWithCurrency,
  };
};
