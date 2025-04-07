'use strict';

export default function dataAtual() {
    const dataCompleta = new Date().toLocaleDateString("pt-BR");
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
    const hora = new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" });
    return `${dataCompleta} - ${diaDaSemana} às ${hora}`;
};
