const Component = require('../libs/component')

// appHooks 모듈 mock 코드 추가

describe('mock module', () => {
    test('giveme banana mock', () => {
        expect(Component.givemeBanana()).toEqual('banana')
    })

    test('giveme apple mock', () => {
        expect(Component.givemeApple()).toEqual('potato')
    })
})