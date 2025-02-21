// import Image from "next/image";
// import styles from "./page.module.css";

import { Header } from "./components/Header";
import Map from "./components/Map";
import { StateProps } from "./components/StateProps";
import { Variabel } from "./components/Variabel";

export default function Home() {
  return (
    <>
      <div>------------------------------------------------------------------------------------------</div>
      <Header />
      <div>------------------------------------------------------------------------------------------</div>
      <Variabel />
      <div>------------------------------------------------------------------------------------------</div>
      <StateProps />
      <div>------------------------------------------------------------------------------------------</div>
      <Map />
      <div>------------------------------------------------------------------------------------------</div>
    </>
  )
}
