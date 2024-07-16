import { RefObject } from "react";

export interface MoveYmdProps {
  y?: number;
  m?: number;
  d?: number;
  top?: string;
  bot?: string;
  movingway: "pre" | "nxt" | "cur";
  ref: RefObject<HTMLDivElement>;
}

export interface DatesFace {
  date: number;
  mon: "pre" | "cur" | "nxt";
}

export interface EventItemProps {
  title: string;
  dateStart: string;
  dateEnd: string;
  content: React.JSX.Element;
}
