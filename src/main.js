import { mount } from "svelte";
import App from "./App.svelte";
import Profile from "./pages/member/quniv/Profile.svelte";
import { initializeTheme } from "./theme.js";

initializeTheme();

const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
const Root = pathname === '/member/quniv' ? Profile : App;

const app = mount(Root, {
  target: document.getElementById("app"),
});

export default app;
