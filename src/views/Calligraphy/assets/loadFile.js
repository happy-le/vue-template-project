// htmlToPdf.js
// 导出页面为PDF格式
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

export async function loadFile(pageListDom, title = 'DPF标题') {
  let PDF = new JsPDF('', 'mm', 'a5')
  const html2CanvasOptions = {
    allowTaint: true, // 允许不同源的图片污染画布
    taintTest: false,
    useCORS: true,
    width: 1480,
    height: 2100,
    scale: 0.5 // 文件大小&清晰度压缩
  }

  let index = 0
  for (const pageItemDom of pageListDom) {
    await html2Canvas(pageItemDom, html2CanvasOptions).then((canvas) => {
      let pageData = canvas.toDataURL('image/png', 0.6)
      index > 0 && PDF.addPage()
      PDF.addImage(pageData, 'PNG', 0, 0, 148, 210)
      index++
    })
  }

  PDF.save(title + '.pdf')
}
