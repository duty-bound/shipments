import { toProperCase } from './to-proper-case'

describe('Test "toProperCase"', () => {

  test('turns a string to Proper case', () => {
    expect(toProperCase('foo')).toEqual('Foo')
  })

  test('returns provided string if first character is not in lowercase', () => {
    expect(toProperCase('S1000')).toEqual('S1000')
  })

  test('returns an empty string when provided with one', () => {
    expect(toProperCase('')).toEqual('')
  })

})
