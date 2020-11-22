import { transformAssets } from './transformAssets'

test('transformAssets return empty object if data is undefined', () => {
  const result = transformAssets(undefined);
  expect(result).toEqual({});
});

test('transformAssets return asset', () => {
  const result = transformAssets({
    data: {
      elements: [{
        name: 'test-name',
        value: 'test-value'
      } as any]
    } as any,
    success: true
  });
  expect(result).toEqual({'test-name': 'test-value'})
});
