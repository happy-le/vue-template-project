// htmlToPdf.js
// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export function loadFile() {
  let title = 'DPF标题' //DPF标题
  html2Canvas(document.getElementById('page_index_1'), {
    allowTaint: true, // 允许不同源的图片污染画布
    taintTest: false,
    useCORS: true,
    // x: 20,
    // y: 20,
    width: 1480,
    height: 2100,
    scale: 1
    // scale: window.devicePixelRatio / 3 //按比例增加分辨率
  }).then((canvas) => {
    console.log('canvas:', canvas)
    const rate = 10
    let pageData = canvas.toDataURL('image/png', 1)

    console.log('pageData:', pageData)
    let PDF = new JsPDF('', 'mm', 'a5')
    PDF.addImage(pageData, 'PNG', 0, 0, 14.8 * rate, 21.0 * rate)
    PDF.save(title + '.pdf')
  })
}
