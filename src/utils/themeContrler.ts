const themeContrler = (class__new : string) : void => {
    const dom = document.getElementsByTagName('body')[0]
    dom.className = class__new
}

export default themeContrler