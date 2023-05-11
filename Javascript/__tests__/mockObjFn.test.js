const { fetchTitle } = require('../libs/fetchData')
const { ModifiedTitle } = require('../libs/modifiedTitle')




describe('normal', () => {
    test('normal', () => {
        // fetchTitle 함수 테스트
        //질문 왜 then을 한번더 사용하나?
        fetchTitle().then(res => expect(res).toEqual({"title": "Welcome Modified: delectus aut autem", "userId": 101}));
    })
})

describe('mock', () => {
    // restore all mocks after each
    afterEach(() => jest.restoreAllMocks())

    test('mock test', () => {
        // ModifiedTitle.prototype.get 함수 mock
        jest.spyOn(ModifiedTitle.prototype, "get").mockResolvedValue(
            {
                title: 'Mocked: title',
                userId: 201
            })
        // fetchTitle 함수 테스트
        // 결과물
        // {
        //     title: 'Welcome Mocked: title',
        //     userId: 201
        // }
        fetchTitle().then(res => expect(res).toEqual({
            title: 'Welcome Mocked: title',
            userId: 201
        }));
    })

    test('normal again', () => {
        // 원래 fetchTitle 함수 테스트
        fetchTitle().then(res => expect(res).toEqual({"title": "Welcome Modified: delectus aut autem", "userId": 101}));
    })
})