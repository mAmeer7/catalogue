import jsPDF from 'jspdf'
import domtoimage from 'dom-to-image'
import { ref } from 'vue'
import { nextTick } from 'vue'

export default defineNuxtPlugin(() => {
  const isGeneratingPDF = ref(false)
  const pdfGenerationProgress = ref(0)

  const generatePDF = async (
    selector: string,
    fileName = 'export.pdf',
    options = {
      quality: 1,
      scale: 5,
      useCompression: true
    }
  ) => {
    const element = document.querySelector(selector) as HTMLElement

    if (!element) {
      console.error(`Element not found: ${selector}`)
      return false
    }

    pdfGenerationProgress.value = 0
    element.classList.remove('hidden')
    await nextTick()
    await nextTick()

    try {
      isGeneratingPDF.value = true
      pdfGenerationProgress.value = 10

      const progressInterval = setInterval(() => {
        if (pdfGenerationProgress.value < 70) {
          pdfGenerationProgress.value += Math.floor(Math.random() * 3) + 1
        }
      }, 200)

      let imgData
      if (options.useCompression) {
        imgData = await domtoimage.toJpeg(element, {
          quality: options.quality,
          bgcolor: '#FFFFFF',
          scale: options.scale,
          style: {
            transform: 'scale(1)',
            transformOrigin: 'top left',
            width: '1440px'
          }
        })
      } else {
        imgData = await domtoimage.toPng(element, {
          bgcolor: '#FFFFFF',
          scale: options.scale
        })
      }

      clearInterval(progressInterval)
      pdfGenerationProgress.value = 75

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      })

      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()

      const img = new Image()
      img.src = imgData

      img.onload = function () {
        const imgWidth = img.width
        const imgHeight = img.height
        const ratio = pageWidth / imgWidth
        const scaledHeight = imgHeight * ratio
        let position = 0

        pdfGenerationProgress.value = 90

        let pageIndex = 1

while (position < scaledHeight) {
  const pageCanvas = document.createElement('canvas')
  const pageContext = pageCanvas.getContext('2d')

  pageCanvas.width = imgWidth
  pageCanvas.height = pageHeight / ratio

  pageContext.drawImage(
    img,
    0,
    position / ratio,
    imgWidth,
    pageCanvas.height,
    0,
    0,
    imgWidth,
    pageCanvas.height
  )

  const pageImageData = pageCanvas.toDataURL(
    options.useCompression ? 'image/jpeg' : 'image/png'
  )

  pdf.addImage(
    pageImageData,
    options.useCompression ? 'JPEG' : 'PNG',
    0,
    0,
    pageWidth,
    pageHeight
  )

// Draw background box for page number
pdf.setFillColor(0, 0, 0, 0.5);  // Black background box with 70% opacity
pdf.roundedRect(pageWidth - 10, pageHeight - 10, 8, 8, 2, 2, 'F'); // Position and size of box - now square (10x10)
  
// Set text properties
pdf.setFont('helvetica', 'bold');  // Set font to bold
pdf.setFontSize(10);               // Font size
pdf.setTextColor(255, 255, 255);   // White text (RGB)
  
// Add page number text centered in the box
pdf.text(`${pageIndex}`, pageWidth - 6, pageHeight - 5, { align: 'center' });

  position += pageHeight
  pageIndex++

  if (position < scaledHeight) {
    pdf.addPage()
  }
}

        pdfGenerationProgress.value = 95
        pdf.save(fileName)

        element.classList.add('hidden')
        pdfGenerationProgress.value = 100

        setTimeout(() => {
          if (!isGeneratingPDF.value) {
            pdfGenerationProgress.value = 0
          }
        }, 1000)
      }

      return true
    } catch (error) {
      console.error('PDF generation failed:', error)
      throw error
    } finally {
      isGeneratingPDF.value = false
    }
  }

  return {
    provide: {
      generatePDF,
      isGeneratingPDF,
      pdfGenerationProgress
    }
  }
})
