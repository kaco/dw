import { ProductDetailsWrapper } from '../globalTypes';

export const transformAssets = (data: ProductDetailsWrapper | undefined) => {
  return data?.data?.elements.reduce((obj, element) => {
    obj[element.name] = element.value;
    return obj;
  }, {} as any) ?? {};
};
