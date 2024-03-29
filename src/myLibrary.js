import jwtDecode from "jwt-decode";

const transliterate = (text, engToRus) => {
    let rus = "щ   ш  ч  ц  ю  я  ё  ж  ъ  ы  э  ь  а б в г д е з и й к л м н о п р с т у ф х".split(/ +/g)
    let eng = "sch sh ch cz yu ya yo zh ii yy ee qq a b v g d e z i j k l m n o p r s t u f h".split(/ +/g)
    for (let x = 0; x < rus.length; x++) {
        text = text.split(engToRus ? eng[x] : rus[x]).join(engToRus ? rus[x] : eng[x]);
        text = text.split(engToRus ? eng[x].toUpperCase() : rus[x].toUpperCase()).join(engToRus ? rus[x].toUpperCase() : eng[x].toUpperCase());
    }
    let trueText
    engToRus ? trueText = text.replace("%20"," ") : trueText = text
    return trueText
}

const isAdmin = () => {
    return JSON.parse(localStorage.getItem("user"))
        ? jwtDecode(JSON.parse(localStorage.getItem("user")).token).isAdmin
        : false
}

const fileHandler = (file, setImageUrl, setEncodedImage) => {
    if (file) {
        setImageUrl(URL.createObjectURL(file))
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setEncodedImage(reader.result)
        }
        reader.onerror = (error) => {
            alert('Error: ', error)
        }
    }
}

export {transliterate, isAdmin, fileHandler}