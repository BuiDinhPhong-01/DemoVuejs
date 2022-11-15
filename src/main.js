import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faDesktop,
  faImages,
  faKey,
  faPalette,
  faCamera,
  faVideo,
  faWaveSquare,
  faUser,
  

} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faLinkedinIn,
  faDribbble,
  faYoutube,
 
  
} from "@fortawesome/free-brands-svg-icons";



library.add(
  faUserSecret,
  faTwitter,
  faDesktop,
  faImages,
  faKey,
  faPalette,
  faCamera,
  faVideo,
  faWaveSquare,
  faUser,
  faSquareFacebook,
  faSquareInstagram,
  faLinkedinIn,
  faDribbble,
  faYoutube,
  
  


 
);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");