export type ApiSuccessResponse<ExpectedData = undefined> = {
  status: 'success';
  data: ExpectedData;
};
