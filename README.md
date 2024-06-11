# speedat

SPAM에서 주관하는 서울로봇고등학교 비공식 커뮤니티 speedat입니다!

# Start

```bash
$ git clone https://github.com/SRHS-SPAM/speedat.git
$ cd speedat
$ pnpm install

# command of a specific package
$ pnpm <package-name> <command>

# example
$ pnpm dev
$ pnpm storybook

```

## Directory structure

```bash
...
client
│── app
│   └── (root)
│   └── (community)
│   └── (auth)
│
│── components
│   └── ui
│   └── provide
│
│── types
│── libs
│── public
│   └── font
│   └── image
│
...
```

## Stack

```bash
 - framework
    Next.js - App Router

 - core library
    jest
    tailwindcss
    Storybook
    Typescript
```

## Rule

### [규정서 참고](https://linear.app/srh-spam/document/speedat-규정서-63e258bc3544)

## 작업전 유의!

1. 작업하고자 하는 기능의 브렌치로 이동
2. branch > Choose a branch to merge into 브렌치 이름
3. develop 선택 (develop에 있는 최신 개발 내용을 기능의 브렌치로 가져오는것)
4. 작업 진행
5. commit (이름은 되도록 "[commit 유형] commit 제목" 형식에 맞춰서 작성)
6. push
7. 기능이 완성되었다면 Preview Pull Request / Create Pull Request (ctrl + alt + p / ctrl + r)
8. develop에 적당한 메세지와 함께 merge
9. 컨플릭 등 예외사항시 사수에게 알리기
