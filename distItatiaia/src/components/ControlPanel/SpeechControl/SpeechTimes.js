"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechTimes = void 0;
const react_1 = __importStar(require("react"));
const AuthProvider_1 = require("../../../contexts/AuthProvider");
function SpeechTimes() {
    const { dados, PatchSpeechParl, GetIdSpeech, getIdSpeech } = (0, react_1.useContext)(AuthProvider_1.AuthContext);
    const [timerOn, setTimerOn] = (0, react_1.useState)(false);
    const [totalTimeInSeconds, setTotalTimeInSeconds] = (0, react_1.useState)(10 * 60); //dados?.data?.speechParl?.speechTimeInit)
    const minutes = Math.floor(totalTimeInSeconds / 60);
    const seconds = totalTimeInSeconds % 60;
    let speechTime;
    let speechTimeInit;
    let speechTimeInitBoolean;
    (0, react_1.useEffect)(() => {
        if (!getIdSpeech) {
            GetIdSpeech();
        }
    }, []);
    (0, react_1.useEffect)(() => {
        if (dados.data?.speechParl?.speechTimeInitBoolean) {
            speechTimeInitBoolean = false;
            setTotalTimeInSeconds(dados.data?.speechParl?.speechTimeInit);
            PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, undefined, undefined, undefined, speechTimeInitBoolean);
            return;
        }
        if (totalTimeInSeconds === 0) {
            return;
        }
        else {
            if (timerOn) {
                const interval = setInterval(() => {
                    setTotalTimeInSeconds((prev) => prev - 1);
                }, 1000);
                return () => clearInterval(interval);
            }
        }
    }, [
        totalTimeInSeconds,
        timerOn,
        dados?.data?.speechParl?.speechTime,
        dados?.data?.speechParl?.speechTimeBoolean,
        dados?.data?.speechParl?.speechTimeInitBoolean,
    ]);
    function handleRestartDisc() {
        setTotalTimeInSeconds(10 * 45);
        speechTimeInitBoolean = true;
        PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, undefined, undefined, undefined, speechTimeInitBoolean);
    }
    function handleInitTimerSpeech() {
        speechTime = true;
        speechTimeInit = totalTimeInSeconds;
        PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, speechTime);
        setTimeout(() => {
            setTimerOn(true);
        }, 300);
    }
    function handleInitTimerSpeechNot() {
        speechTime = false;
        PatchSpeechParl(getIdSpeech, undefined, undefined, undefined, speechTime);
        setTimerOn(false);
    }
    return (react_1.default.createElement("div", { className: "flex w-full justify-between" },
        react_1.default.createElement("div", { className: "flex flex-col" },
            react_1.default.createElement("span", { className: "font-bold" }, "Cronometro do Discurso"),
            react_1.default.createElement("div", { className: "my-2" },
                react_1.default.createElement("h3", { className: "text-2xl" },
                    react_1.default.createElement("span", null, minutes.toString().padStart(2, "0")),
                    ":",
                    react_1.default.createElement("span", null, seconds.toString().padStart(2, "0")))),
            react_1.default.createElement("div", { className: "flex gap-4" },
                timerOn === false ? (react_1.default.createElement("span", { onClick: handleInitTimerSpeech, className: "flex cursor-pointer border px-4 rounded bg-green-200 hover:bg-green-400" }, "iniciar")) : (react_1.default.createElement("span", { onClick: handleInitTimerSpeechNot, className: "flex cursor-pointer border px-4 rounded bg-green-200 hover:bg-green-400" }, "pausar")),
                react_1.default.createElement("span", { onClick: handleRestartDisc, className: "flex cursor-pointer border px-4 rounded bg-green-200 hover:bg-green-400" }, "reiniciar")))));
}
exports.SpeechTimes = SpeechTimes;
