/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
__export(exports, {
  default: () => Overdue
});
var import_obsidian = __toModule(require("obsidian"));
var BRACKETS_REGEX = /\[+|\]+/g;
var DATE_REGEX = /\[\[\d{4}-\d{2}-\d{2}\]\]/g;
var OVERDUE_REGEX = /\[\[Overdue\]\]/i;
var TODO_REGEX = /- \[ \]/;
var Overdue = class extends import_obsidian.Plugin {
  markOverdue() {
    return __async(this, null, function* () {
      console.log("Searching for overdue items");
      const now = new Date();
      now.setHours(0, 0, 0, 0);
      for (const file of this.app.vault.getMarkdownFiles()) {
        const fileDate = new Date(`${file.basename}T00:00`);
        const isPastDailyNote = fileDate < now;
        let hasChange = false;
        const newLines = [];
        const content = yield this.app.vault.cachedRead(file);
        for (let line of content.split("\n")) {
          if (line.match(TODO_REGEX) && !line.match(OVERDUE_REGEX)) {
            if (isPastDailyNote) {
              line = `${line} [[Overdue]]`;
              hasChange = true;
            } else {
              for (const dateLink of line.match(DATE_REGEX) || []) {
                const dateString = dateLink.replace(BRACKETS_REGEX, "");
                const lineDate = new Date(`${dateString}T00:00`);
                if (lineDate < now) {
                  line = `${line} [[Overdue]]`;
                  hasChange = true;
                  break;
                }
              }
            }
          }
          newLines.push(line);
        }
        if (hasChange) {
          console.log(`Marking overdue item(s) in ${file.path}`);
          yield this.app.vault.modify(file, newLines.join("\n"));
        }
      }
      console.log("Finished marking overdue items");
    });
  }
  onload() {
    return __async(this, null, function* () {
      this.addCommand({
        id: "overdue-mark",
        name: "Mark overdue items",
        callback: () => {
          this.markOverdue();
        }
      });
      this.interval = window.setInterval(() => {
        const now = new Date();
        if (now.getHours() == 0) {
          this.markOverdue();
        }
      }, 20 * 60 * 1e3);
      this.registerInterval(this.interval);
    });
  }
  onunload() {
    window.clearInterval(this.interval);
  }
};

/* nosourcemap */