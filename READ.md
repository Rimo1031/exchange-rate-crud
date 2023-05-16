# CRUD Operation at MongoDB with GraphQL

## 설치 및 실행 방법

1. `git clone https://github.com/Rimo1031/exchange-rate-crud.git` 명령어를 통해 이 repository를 clone합니다.
2. Terminal에서 repository가 clone된 디렉토리로 이동하여 `npm install` 명령어를 실행합니다.
3. `npm start` 명령어를 통해 서버를 실행합니다.
4. 터미널에서 다음 명령어를 통해 쿼리를 요청할 수 있습니다.

    ```bash
    curl -XPOST "http://localhost:5110/graphql" --silent \
    -H  "accept: application/json" \
    -H  "Content-Type: application/json" \
    -d '
    쿼리문
    '
    ```

5. 터미널에서의 `curl` 명령어가 작동하지 않는다면, 브라우저에서 `http://localhost:5110/graphql` URL을 통해 GraphiQL GUI에 접근할 수 있습니다.
6. 화면의 좌측 입력 란에 GraphQL 쿼리문을 입력하고 좌상단 재생 버튼을 누르면 우측에 쿼리문의 결과가 출력됩니다.
