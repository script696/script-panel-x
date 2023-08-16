import { $apiClient } from "../client";
import {
  GetProductProductsRequestDto,
  GetProductProductsResponseDto,
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

export class ProductService {
  static getProducts(params: GetProductProductsRequestDto) {
    return $apiClient.get<ApiSuccessResponse<GetProductProductsResponseDto>>(
      "product/get",
      {
        params,
      }
    );
  }

  static createProducts(data: CreateProductRequestDto) {
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
      data
    );
  }

  static updateProductSecondaryInfo(
    data: UpdateProductSecondaryInfoRequestDto
  ) {
    return $apiClient.put<UpdateProductSecondaryInfoResponseDto>(
      "product/update-secondary-info",
      data
    );
  }

  static addImages(data: AddProductImageRequestDto) {
    return $apiClient.post<AddProductImagesResponseDto>(
      "product/add-images",
      data
    );
  }

  static removeImages(data: AddProductImageRequestDto) {
    return $apiClient.post<AddProductImagesResponseDto>(
      "product/remove-images",
      data
    );
  }
}
