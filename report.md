# Implement CRUD Operation with GraphQL & MongoDB

## 기술 분석

### Express

Node.js로 웹 서버 애플리케이션을 제작할 수 있게 해주는 프레임워크. 서버 프로그램 담당

### GraphQL

클라이언트에서 데이터베이스에 데이터를 요청할 때 사용하는 쿼리 언어. 어떤 객체와 그 객체의 필드를 요청하면 맞는 값을 반환해 준다. 쿼리할 때 어떤 객체와 필드를 요구할지만 작성해도 상관없지만 (단축 문법), 혼동을 방지하기 위해 보통 작업 타입(query, mutation)과 작업 이름(함수명의 역할)을 기재해서 쿼리문을 작성한다.

- 쿼리문 예시

```graphql
query HeroNameAndFriends {
  hero {
    name
    friends {
      name
    }
  }
}
```

- Object type : 쿼리 결과로 가져올 수 있는 객체의 종류 + 그 객체의 필드.

```graphql
// example
type Character {
    name: String!
    appearsIn: [Episode]!
}

```

예시에서 Character 타입 객체는 name, appearIn 필드를 가지고, name은 String 타입, appearsIn은 Episode 객체의 배열을 가진다. !는 해당 필드가 non-nullable함을 의미한다.

- Schema : Object type들을 미리 선언해 둔 것. type명을 이름으로 가지는 함수의 원형을 선언한 것과 유사함. (예시 : C의 헤더 파일) 서버에 요청할 수 있는 데이터에 대한 정확한 표현을 미리 정의해 두고, 쿼리가 들어오면 스키마와 대조해서 유효성 검사를 실시함.

  - query, mutation 타입 : 스키마 내의 특수한 타입. 일반 객체 타입과 동일하되, "쿼리의 entry point" 역할을 함
  - input 타입 : mutation 과정에서 생성되는 전체 객체를 전달할 때 사용. 일반 객체 타입과 완전히 같지만, 선언 시 `type` 대신 `input` 사용

- Resolver : 특정 type의 쿼리가 들어왔을 때 어떤 값을 반환할 것인지를 구현. GraphQL 쿼리에서의 각 필드는 "특정 타입을 반환하는 함수"로 생각할 수 있고, 실제로 이렇게 작동함. Query와 Mutation 타입 내의 각 필드마다 그 필드가 실행되었을 때 호출되는 resolver 함수가 존재해야 함.

- @key : directive의 일종으로, type에서의 primary key를 정의한다. Primary key는 다른 데이터의 field와 중복되지 않는 값을 가지는 field로, 모든 데이터가 다른 값을 가지기 때문에 데이터를 판별하는데 쓰인다.

### Mongoose

Node.js와 MongoDB를 연결시켜주는 모듈. GraphQL과 동일하게 schema를 선언하고, 해당 schema를 가지는 model을 생성한다. 그리고 model의 instance를 document라 칭한다. model에 대해 query(get), delete, update를 수행할 수 있다.

- `Model.findOne()` : `Model` 안에서 하나의 document를 찾아낸다. 인자로 찾아낼 document의 조건을 객체 형태로 넘겨주고, 찾아낸 document를 반환한다. get~ 쿼리에 사용할 예정
- `Model.findOneAndDelete()` : `Model` 안에서 하나의 document를 찾아 반환하고 삭제한다. delete~ 쿼리에 사용할 예정
- `Model.findOneAndUpdate()` : `Model` 안에서 하나의 document를 찾아 update한다. 인자에 주어질 option 객체의 `upsert` field가 true라면 조건에 해당하는 document를 찾지 못했을 때 새로운 document를 삽입한다. 이 때 반환하는 document는 별도 옵션을 부여하지 않으면 upsert 과정이 일어나기 **이전의** document이다. post~ 쿼리에 사용할 예정

## 구현 계획

1. Express 서버 가동
2. GraphQL Schema 작성
3. GraphQL Resolver 작성
   - 이 때 Resolver는 일단 로컬에 하드코딩된 데이터를 참조하게 구현한다. (Schema와 Resolver 간의 연결이 잘 이루어졌는지 확인하기 위함)
4. MongoDB 설정 및 연결
   - Mongoose 사용
5. Mongoose API를 사용해 resolver에 DB 연결 부분 구현
   - get~ resolver 구현
   - post~ resolver 구현
   - delete~ resolver 구현

## 구현에 성공한 요구 사항

- GraphQL 쿼리를 통한 CRUD operation

  - `getExchangeInfo` : 조건에 맞는 데이터를 성공적으로 반환합니다.
  - `postExchangeInfo` : 조건에 맞는 데이터를 성공적으로 찾아 업데이트하고, 찾을 수 없을 시 새로운 document를 생성해 삽입합니다.
    - Insert 상황에서는 삽입하는 document를 반환하고, Update 상황에서는 수정이 완료된 document를 반환합니다.
  - `deleteExchangeInfo` : 조건에 맞는 데이터를 성공적으로 찾아 반환하고 삭제합니다.

## 구현에 실패한 요구 사항

- `@key` directive 사용
  - `@key` directive는 데이터의 primary key를 정의하는 데 사용되지만, 주어진 schema에서의 `@key` directive는 `src`와 `tgt`를 사용하고 있었습니다. `src`와 `tgt`는 데이터의 unique한 값이 될 수 없다고 생각해 `@key`로 적합하지 않은 것 같아 더 나은 구현 방법을 고민해 보았지만 찾을 수 없어 구현하지 못했습니다.

## Reference

### Official Docs

- Express : <https://expressjs.com/ko/starter/hello-world.html>
- GraphQL : <https://graphql-kr.github.io/learn/>
- MongoDB : <https://www.mongodb.com/docs/drivers/node/current/quick-start/>
- Mongoose : <https://mongoosejs.com/docs/guides.html>

### Blogs

- GraphQL, Express 연동 : <https://velog.io/@soryeongk/express-graphql-basic>
- GraphQL, MongoDB 연동 : <https://yuddomack.tistory.com/entry/expressgraphql에-mongodb-사용하기>
- @key directive : <https://blog.doctor-cha.com/integrating-graphql-services-with-graphql-federation>
