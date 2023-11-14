import { Fira_Code as FontMono, Inter as FontSans, DM_Serif_Display as FontDm,
Quicksand as FontQuick, Roboto as FontRoboto } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontdmSerif = FontDm({
  subsets: ["latin"],
  weight: ["400"]
})

export const fontQuicksand = FontQuick({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const fontRoboto = FontRoboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"]
})