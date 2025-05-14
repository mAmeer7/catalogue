import jsPDF from 'jspdf'
import domtoimage from 'dom-to-image'
import { ref } from 'vue'

export default defineNuxtPlugin(() => {
  // Create a reactive loading state
  const isGeneratingPDF = ref(false)

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
    
    
    try {
      // Set loading state to true
      isGeneratingPDF.value = true
      
      // Generate image using dom-to-image
      let imgData
      if (options.useCompression) {
        imgData = await domtoimage.toJpeg(element, {
          quality: options.quality,
          bgcolor: '#FFFFFF',
          scale: options.scale,
        })
      } else {
        imgData = await domtoimage.toPng(element, {
          bgcolor: '#FFFFFF',
          scale: options.scale
        })
      }
      
      // Standard A4 width in mm and calculate height proportionally
      const pdfWidth = 210
      const aspectRatio = element.offsetHeight / element.offsetWidth
      const pdfHeight = pdfWidth * aspectRatio
      
      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [pdfWidth, pdfHeight]
      })
      console.log("Capturing")
      
      // Add image to PDF
      pdf.addImage(
        imgData,
        options.useCompression ? 'JPEG' : 'PNG',
        0, 0,
        pdfWidth, pdfHeight
      )
      console.log("Saving")
      
      // Save PDF
      pdf.save(fileName)
      
      return true
    } catch (error) {
      console.error('PDF generation failed:', error)
      throw error
    } finally {
      // Always reset loading state when finished, whether success or error
      isGeneratingPDF.value = false
    }
  }
  
  return {
    provide: {
      generatePDF,
      isGeneratingPDF //  loading state
    }
  }
})