## Reference

### Official Docs

- Express : https://expressjs.com/ko/starter/hello-world.html
- GraphQL : https://graphql-kr.github.io/learn/
- MongoDB : https://www.mongodb.com/docs/guides/

### Blogs

- GraphQL, Express 연동 : https://velog.io/@soryeongk/express-graphql-basic
- GraphQL, MongoDB 연동 : https://velog.io/@wjd489898/graphQL-MongoDB-실습하기

## 기술 분석

### Express

Node.js로 웹 서버 애플리케이션을 제작할 수 있게 해주는 프레임워크. 서버 프로그램 담당

### GraphQL

클라이언트에서 데이터베이스에 데이터를 요청할 때 사용하는 쿼리 언어.

- Object type : 쿼리 결과로 가져올 수 있는 객체의 종류 + 그 객체의 필드

```
    type Character {
        name: String!
        appearsIn: [Episode]!
    }
```

Character 타입 객체는 name, appearIn 필드를 가지고, name은 String 타입, appearsIn은 Episode 객체의 배열을 가진다. !는 해당 필드가 non-nullable함을 의미한다.

- Schema : Object type들을 미리 선언해 둔 것. type명을 이름으로 가지는 함수의 원형을 선언한 것과 유사함

- Resolver : 특정 type의 쿼리가 들어왔을 때 어떤 값을 반환할 것인지를 구현. Schema에서 선언한 함수의 내용을 실제 구현하는 것과 유사함
  - 구현해야 할 Resolver : get/post/deleteExchangeRate. DB에 접근하여 해당 데이터를 CRUD

### MongoDB

데이터베이스.

### Express(Node.js) <-> GraphQL <-> MongoDB ?
