import React, { Fragment, ReactElement } from "react"
import { StaticImage } from "gatsby-plugin-image"

interface Category {
  slug: string,
  name: string,
  description: string
}

export const title = "MIT Film Makers Association";

export const format = (d: Date) => `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`;
export const mmdd = (d: Date) => `${d.getMonth() + 1} 月 ${d.getDate()} 日`;

const summary: Category[] = [
  {slug: "", name: "Home", description: ""},
  {slug: "people", name: "People", description: ""},
  {slug: "philosophy", name: "Philosophy", description: ""},
  {slug: "portfolio", name: "Portfolio", description: ""}
]

export default summary;
