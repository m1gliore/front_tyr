const transliterate = (text, engToRus) => {
    let rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь".split(/ +/g)
    let eng = "sch sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f h `".split(/ +/g)
    for (let x = 0; x < rus.length; x++) {
        text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x])
        text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase())
    }
    return text
}

export default transliterate
