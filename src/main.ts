import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { initArtwork } from "./assets/artwork.ts";

createApp( App ).mount( '#app' )

initArtwork()
