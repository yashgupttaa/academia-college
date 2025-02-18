import BcaHonsPage from "./bca-hons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bachelor of Computer Applications (BCA) Honours Program | Academic College",
  description: "Discover the Bachelor of Computer Applications (BCA) Honours program at Academic College. Equip yourself with advanced technical skills and a deep understanding of computer science, programming, and IT solutions.",
};


export default function BcaPage() {

  return (
    <>
      <BcaHonsPage />
    </>
  );
}
