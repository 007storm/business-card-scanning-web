class Print {
    constructor(printHTML){
        this.printHTML = printHTML || null;
    }
    // run 打印执行
    print(title){
        this.title = title || document.title;
        this.createElement();
    }
    // 创建元素
    createElement(){
        this.iframe = document.createElement('iframe');// 创建iframe元素
        this.iframe.style.display = 'none';
        document.body.appendChild(this.iframe);
        let iframeDoc = this.iframe.contentWindow.document;
        iframeDoc.head.innerHTML = this.SetHead();
        iframeDoc.body.innerHTML = this.getMainDom();
        this.iframe.contentWindow.focus();
        this.iframe.contentWindow.print();
        document.body.removeChild(this.iframe);
    }
    // 获取样式
    getCss(){
        this.css = document.querySelectorAll('link[rel="stylesheet"]');
        let cssReg = /@media print/gi;// 查找打印标识的style样式
        let styleSheetsArr = [];
        let cssMain = "";// 样式主体
        this.css.forEach(item => {
            if (item.sheet && item.sheet.cssRules.length != 0) {
                styleSheetsArr.push(item.sheet.cssRules[0].cssText);
            }
        })
        styleSheetsArr.forEach(cssItem => {
            if (cssReg.test(cssItem)){
                cssMain = cssItem;
            }
        })
        return cssMain;
    }
    // <head>（title） 设置
    SetHead(){
        let cssMain = this.getCss();
        let headStr = `
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <title>${this.title}</title>
            <style>${cssMain}</style>
        `
        return headStr;
    }
    // 获取主体
    getMainDom(){
        let printMain = "";
        if (this.printHTML == null){
            console.error('printHTML is null, 无dom元素');
        } else {
            printMain = this.printHTML;
        }
        return printMain;
    }
}

export default Print;