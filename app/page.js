import Image from "next/image";
import Mainhome from "./home/contains/home";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import PageProgressBar from "./shared/PageProgressBar";

export default function Home() {
  return (
    <div>
      <Mainhome />
    </div>
  );
}
