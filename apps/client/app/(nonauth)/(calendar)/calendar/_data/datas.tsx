import { EventItemProps } from "./calendarType";

export const Data: EventItemProps[] = [
  {
    title: "입학식",
    dateStart: "3월 21일(수)",
    dateEnd: "3월 21일(수)",
    content: (
      <>
        입학식
        <br />
        <br />
        8시 20분까지 등교.
        <br />
        최소 7시 기상
        <br />
        <br />
        단축수업 30분 있음.
      </>
    ),
  },

  {
    title: "졸업식",
    dateStart: "12월 13일(금)",
    dateEnd: "12월 13일(금)",
    content: (
      <>
        졸업식
        <br />
        <br />
        11시 20분까지 등교.
        <br />
        최고 9시 기상
        <br />
        <br />
        수고하셨습니다.
      </>
    ),
  },
];

export const Month = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

export const Day = ["일", "월", "화", "수", "목", "금", "토"];
