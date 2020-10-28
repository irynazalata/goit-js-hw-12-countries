import './styles.css';

import {
  alert,
  info,
  error,
  defaultModules,
} from "../node_modules/@pnotify/core/dist/PNotify.js";
import * as PNotifyDesktop from "../node_modules/@pnotify/desktop/dist/PNotifyDesktop.js";
import "../node_modules/@pnotify/core/dist/PNotify.css";
import "../node_modules/@pnotify/desktop/dist/PNotifyDesktop.css";
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyDesktop, {});

error("Too many entries found. Please enter a more specific query!");