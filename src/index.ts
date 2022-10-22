import "./style.css";
import { UI } from "peasy-ui";
import img1 from "./assets/attackicon.png";
import img2 from "./assets/barbarian_m.png";
import img3 from "./assets/barbarian_w.png";
import img4 from "./assets/cursor.png";
import img5 from "./assets/paladin_male.png";
import img6 from "./assets/paladin_w.png";
import img7 from "./assets/rogue_male.png";
import img8 from "./assets/rogue_w.png";
import img9 from "./assets/stackofcoin.png";
import img10 from "./assets/statusEffect_discard.png";
import img11 from "./assets/statusEffect_location.png";
import img12 from "./assets/statusEffect_MonsterBonus.png";
import img13 from "./assets/statusEffect_nodraw.png";
import img14 from "./assets/statusEffect_stunned.png";
import img15 from "./assets/whitebuilding.png";
import img16 from "./assets/whitecard.png";
import img17 from "./assets/whiteeffect.png";
import img18 from "./assets/whitemonster.png";
import img19 from "./assets/whiteuser.png";
import img20 from "./assets/wizard.png";
import img21 from "./assets/wizard_female.png";

console.log(`Hello World`);
let img_index = 1;
let loaded = false;
let imgarray = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
];

const template = `
<div>
    <img src="\${imgsrc}" alt=""  \${load@=>load}/>
    <button \${click@=>back}>Back</button>
    <button \${click@=>forward} \${forward}>Forward</button>
</div>`;
let model;
model = {
  get imgsrc() {
    return imgarray[img_index];
  },
  back: () => {
    if (img_index > 1) img_index -= 1;
    console.log("index", img_index, model.imgsrc);
  },
  forward: () => {
    if (img_index < 21) img_index += 1;
    console.log("index", img_index, model.imgsrc);
  },
  load: () => {
    console.log("loading");
    if (loaded) return;
    if (img_index < 21) img_index += 1;
    else loaded = true;
  },
};
UI.create(document.body, template, model);

setInterval(() => {
  UI.update();
}, 1000 / 60);
