import Icon from "@mdi/react";
import {mdiFormatListBulleted, mdiMicrophone} from "@mdi/js";
import youtubeSvg from '../assets/youtube.svg'
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="flex w-full justify-between pb-5 pt-5 pl-5 pr-5">

        <div className="flex items-center">
          <button
            style={{width: "fit-content", height: "fit-content"}}>
            <Icon path={mdiFormatListBulleted} style={{fill: "whıte"}} size={1}/>
          </button>
          <a className="flex items-center ml-5">
            <Image src={youtubeSvg} alt={"Youtube Logo"}/>
          </a>
        </div>
        <div className="flex pl-10">
          <input type="text" id="search-navbar"
                 className="w-fit p-1.5 pl-5 border border-gray-800 rounded-2xl bg-gray-950" placeholder="Ara"/>
          <button
            style={{width: "fit-content", height: "fit-content", paddingLeft: "7px"}} className="flex pt-2">
            <Icon path={mdiMicrophone} style={{fill: "whıte"}} size={1}/>
          </button>
        </div>
        <div className="flex justify-between">
          <button
            style={{width: "fit-content", height: "fit-content"}}>
            <Icon path={mdiFormatListBulleted} style={{fill: "whıte"}} size={1}/>
          </button>
          <button
            style={{width: "fit-content", height: "fit-content"}}>
            <Icon path={mdiFormatListBulleted} style={{fill: "whıte"}} size={1}/>
          </button>
          <button
            style={{width: "fit-content", height: "fit-content"}}>
            <Icon path={mdiFormatListBulleted} style={{fill: "whıte"}} size={1}/>
          </button>

        </div>


      </nav>
    </main>
  )
}
