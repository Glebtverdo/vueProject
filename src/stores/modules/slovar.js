export default {
    namespaced: true,
    state: {
        infoRu: [{
            name: "А",
            value: [{ Ru: "Алфавит", En: "alphabet" }, { Ru: "Аналоговый сигнал", En: "continuous signal" }, { Ru: "Аппаратная часть", En: "ardware" }]
        }, {
            name: "Б",
            value: [{ Ru: "Бинарные операции", En: "binary operators" }, { Ru: "Бит переноса", En: "carry bit" }, { Ru: "Бит", En: "bit" }]
        }, {
            name: "В",
            value: [{ Ru: "Векторное кодирование", En: "vectorized" }, { Ru: "Векторный рисунок", En: "vector drawing" }]
        }, ],
        infoEn: [{
            name: "A",
            value: [{ Ru: "алфавит", En: "Alphabet" }, { Ru: "мощность алфавита", En: "Alphabet capacity" }, { Ru: "аппаратная часть", En: "Ardware" }]
        }, {
            name: "B",
            value: [{ Ru: "эквиваленция", En: "biconditional" }, { Ru: "бинарные операции", En: "binary operators" }, { Ru: "бит", En: "bit" }]
        }, {
            name: "C",
            value: [{ Ru: "калибраторы(колориметры)", En: "calibrator" }, { Ru: "оцифровка", En: "capture" }, { Ru: "бит переноса", En: "carry bit" }, { Ru: "регистр", En: "case" }, { Ru: "формализация", En: "characterization" }, { Ru: "цветовые профили", En: "chromatic" }, { Ru: "код", En: "code" }, { Ru: "закодированная информация", En: "coded information(data)" }, { Ru: "цветовая палитра", En: "color gamut" }, { Ru: "логическое умножение(конъюнкция)", En: "conjunctio" }, { Ru: "связный граф", En: "connected graph" }, { Ru: "аналоговый сигнал", En: "continuous signal" }, { Ru: "управляющие линии", En: "control lines" }, { Ru: "герц", En: "cycles per second" }, { Ru: "логический сдвиг", En: "cyclic shift" }]
        }, {
            name: "D",
            value: [{ Ru: " декодирование", En: "decoding" }, { Ru: "разрешение", En: "definition" }, { Ru: " дискретный сигнал", En: "discrete signal" }, { Ru: " дискретизации", En: "discretisation" }, { Ru: " логическое сложение (дизъюнкция)", En: "disjunctio" }]
        }, ]
    },
    getters: {
        infoRu(state) {
            return state.infoRu
        },
        infoEn(state) {
            return state.infoEn
        }
    }
};