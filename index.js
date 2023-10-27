const Tesseract = require('tesseract.js')
// import Tesseract from "tesseract.js"

// https://fiscaliaslp.gob.mx/DESAPARECIDOS/pesquisas/CDI_AARON%20DE%20JESUS%20DIOSDADO%20GAYTAN.jpg
// function main() {
//   Tesseract.recognize('./image.jpg', 'spa', {
//     logger: e => console.log(e),
//   }).then(function (result){
//     console.log(result.data.text)
//   }).catch(function (error) {
//     console.log(error)
//   })
// }

// main()

const { createWorker, PSM } = Tesseract;
(async () => {
  const image = './image.jpg'
  // const worker = await createWorker('spa');
  // await worker.setParameters({
  //   tessedit_pageseg_mode: 'PSM_SPARSE_TEXT_OSD',
  // });
  const worker = await createWorker('spa');
  // await worker.load();
  // await worker.loadLanguage('spa+osd');
  // await worker.initialize('spa+osd');
  await worker.setParameters({
    preserve_interword_spaces: '1'
  });
  const { data: { text } } = await worker.recognize(image, {
    rectangle: { top: 120, left: 361, width: 557, height: 528 },
  });
  console.log(text);
})();