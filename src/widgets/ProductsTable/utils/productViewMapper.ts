import { ProductViewModel } from "app/store/reducers/products/types/typedef";
import { getStaticUrl } from "shared/utils";
import { getNumberWithCurrency } from "shared/utils/getPriceWithCurrency";

export const mapProductToView = (product: ProductViewModel) => {
  const { images, price, discount, currency } = product;

  const productMainPhoto = images?.length ? getStaticUrl(images[0].source) : "/img/default_product.png";

  const availableSizes =
    product.availableSizes.length <= 2
      ? product.availableSizes.join(" ")
      : `${product.availableSizes.slice(2).join(" ")} ...`;

  const priceWithCurrency = getNumberWithCurrency({ number: price, currency });
  const discountWithCurrency = getNumberWithCurrency({ number: discount, currency });

  return {
    productMainPhoto,
    availableSizes,
    priceWithCurrency,
    discountWithCurrency,
  };
};
