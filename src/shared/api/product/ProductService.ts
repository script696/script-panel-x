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
  AddProductImageRequestDto,
  AddProductImagesResponseDto,
} from "./dto/AddProductImagesDto";
import axios from "axios";
import { ApiSuccessResponse } from "../responses/ApiSuccessResponse";
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
    return $apiClient.delete<ApiSuccessResponse<RemoveProductResponseDto>>(
      "product/remove",
      {
        data,
      }
    );
  }

  static updateProductMainInfo(data: UpdateProductMainInfoRequestDto) {
    return $apiClient.put<ApiSuccessResponse<UpdateProductMainInfoResponseDto>>(
      "product/update-main-info",
      data
    );
  }

  static updateProductSecondaryInfo(
    data: UpdateProductSecondaryInfoRequestDto
  ) {
    return $apiClient.put<
      ApiSuccessResponse<UpdateProductSecondaryInfoResponseDto>
    >("product/update-secondary-info", data);
  }

  static addImages(data: AddProductImageRequestDto) {
    return $apiClient.post<ApiSuccessResponse<AddProductImagesResponseDto>>(
      "product/add-images",
      data
    );
  }

  static removeImages(data: RemoveProductImageRequestDto) {
    return $apiClient.post<ApiSuccessResponse<RemoveProductImagesResponseDto>>(
      "product/remove-images",
      data
    );
  }
}
