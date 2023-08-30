import { $apiClient } from "../client";
import {
  GetProductsRequestDto,
  GetProductsResponseDto,
} from "./dto/GetProductsDto";
import {
  CreateProductRequestDto,
  CreateProductResponseDto,
} from "./dto/CreateProductDto";
import {
  RemoveProductRequestDto,
  RemoveProductResponseDto,
} from "./dto/RemoveProductDto";
import {
  UpdateProductMainInfoRequestDto,
  UpdateProductMainInfoResponseDto,
} from "./dto/UpdateProductMainInfoDto";
import {
  UpdateProductSecondaryInfoRequestDto,
  UpdateProductSecondaryInfoResponseDto,
} from "./dto/UpdateProductSecondaryInfoDto";
import {
  AddProductImagesRequestDto,
  AddProductImagesResponseDto,
} from "./dto/AddProductImagesDto";
import {
  RemoveProductImageRequestDto,
  RemoveProductImagesResponseDto,
} from "./dto/RemoveProductImagesDto";

export class ProductService {
  static getProducts(params: GetProductsRequestDto) {
    return $apiClient.get<GetProductsResponseDto>("product/get", {
      params,
    });
  }

  static createProduct(data: CreateProductRequestDto) {
    return $apiClient.post<CreateProductResponseDto>("product/create", data);
  }

  static removeProducts(data: RemoveProductRequestDto) {
    return $apiClient.delete<RemoveProductResponseDto>("product/remove", {
      data,
    });
  }

  static updateProductMainInfo(data: UpdateProductMainInfoRequestDto) {
    return $apiClient.put<UpdateProductMainInfoResponseDto>(
      "product/update-main-info",
      data,
    );
  }

  static updateProductSecondaryInfo(
    data: UpdateProductSecondaryInfoRequestDto,
  ) {
    return $apiClient.put<UpdateProductSecondaryInfoResponseDto>(
      "product/update-secondary-info",
      data,
    );
  }

  static addImages(data: AddProductImagesRequestDto) {
    return $apiClient.post<AddProductImagesResponseDto>(
      "product/add-images",
      data,
      { headers: { "Content-Type": "multipart/form-data" } },
    );
  }

  static removeImages(data: RemoveProductImageRequestDto) {
    return $apiClient.delete<RemoveProductImagesResponseDto>(
      "product/remove-images",
      {
        data,
      },
    );
  }
}
