"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Processo = void 0;
const react_1 = __importDefault(require("react"));
function Processo({ session }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex flex-col gap-2" },
            react_1.default.createElement("h3", { className: "flex text-xl sm:text-3xl font-semibold" }, session[0].__str__)),
        react_1.default.createElement("div", { className: "flex flex-col gap-4" },
            react_1.default.createElement("div", { className: "hidden w-full justify-end gap-4" },
                react_1.default.createElement("button", { className: "flex bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-900" }, "Editar"),
                react_1.default.createElement("button", { className: "flex bg-red-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-900" }, "Excluir"))),
        react_1.default.createElement("div", { className: "flex flex-col mt-5 divide-y-2 gap-5" },
            react_1.default.createElement("h3", { className: "flex text-xl font-semibold" }, "Dados B\u00E1sicos"),
            react_1.default.createElement("div", { className: "flex flex-col gap-2" },
                react_1.default.createElement("h3", { className: "px-2 py-4 text-xl" }),
                react_1.default.createElement("div", { className: "flex flex-col gap-5" },
                    react_1.default.createElement("div", { className: "flex flex-col bg-gray-200 p-4 rounded-md gap-4" },
                        react_1.default.createElement("div", { className: "flex w-full justify-between" },
                            react_1.default.createElement("div", { className: "flex flex-col max-w-[30%]" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "Legislatura"),
                                react_1.default.createElement("span", { className: "flex " }, session[0].legislatura == 1 && react_1.default.createElement("span", null, "50\u00AA (2021 - 2024)(Atual)"))),
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "Sess\u00E3o Legislativa"),
                                react_1.default.createElement("span", null,
                                    session[0].sessao_legislativa == 1 && react_1.default.createElement("span", null, "-------"),
                                    session[0].sessao_legislativa == 2 && react_1.default.createElement("span", null, "3\u00BA (2023 - 2023)(Atual)"))),
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "Tipo"),
                                react_1.default.createElement("span", null,
                                    session[0].tipo == 0 && react_1.default.createElement("span", null, "-------"),
                                    session[0].tipo == 1 && react_1.default.createElement("span", null, "Sess\u00E3o Extraordin\u00E1ria"),
                                    session[0].tipo == 2 && react_1.default.createElement("span", null, "Sess\u00E3o Ordin\u00E1ria"),
                                    session[0].tipo == 3 && react_1.default.createElement("span", null, "Sess\u00E3o Solene"))),
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "N\u00FAmero"),
                                react_1.default.createElement("span", null, session[0].numero)),
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "Publicar Pauta?"),
                                react_1.default.createElement("span", null, session[0].publicar_pauta ? 'Sim' : 'Não'))),
                        react_1.default.createElement("div", { className: "flex w-full justify-between" },
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "Abertura"),
                                react_1.default.createElement("span", null, session[0].data_inicio)),
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "Hor\u00E1rio (hh:mm)"),
                                react_1.default.createElement("span", null, session[0].hora_inicio)),
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "Sess\u00E3o iniciada?"),
                                react_1.default.createElement("span", null, session[0].iniciada ? 'Sim' : 'Não'))),
                        react_1.default.createElement("div", { className: "flex w-full justify-between" },
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "Encerramento"),
                                react_1.default.createElement("span", null, session[0].data_fim)),
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "Hor\u00E1rio (hh:mm)"),
                                react_1.default.createElement("span", null, session[0].hora_fim)),
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "Sess\u00E3o finalizada?"),
                                react_1.default.createElement("span", null, session[0].finalizada ? 'Sim' : 'Não'))),
                        react_1.default.createElement("div", { className: "flex w-full justify-between" },
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "Pauta da Sess\u00E3o"),
                                react_1.default.createElement("span", null, session[0].upload_pauta)),
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "Ata da Sess\u00E3o "),
                                react_1.default.createElement("span", null, session[0].upload_ata)),
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "Anexo da Sess\u00E3o"),
                                react_1.default.createElement("span", { className: "flex min-w-[200px] h-6" }, session[0].upload_anexo))),
                        react_1.default.createElement("div", { className: "flex w-full justify-between" },
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "URL Arquivo \u00C1udio (Formatos MP3 / AAC)"),
                                react_1.default.createElement("span", { className: "flex min-w-[200px] h-6" }, session[0].url_audio)),
                            react_1.default.createElement("div", { className: "flex flex-col" },
                                react_1.default.createElement("h4", { className: "font-bold" }, "URL Arquivo V\u00EDdeo (Formatos MP4 / FLV / WebM) "),
                                react_1.default.createElement("span", { className: "flex min-w-[200px] h-6" }, session[0].url_video)))))))));
}
exports.Processo = Processo;
