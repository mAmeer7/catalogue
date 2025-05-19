import jsPDF from 'jspdf'
import domtoimage from 'dom-to-image'
import { ref } from 'vue'
import { nextTick } from 'vue'

export default defineNuxtPlugin(() => {
  // Create reactive states
  const isGeneratingPDF = ref(false)
  const pdfGenerationProgress = ref(0) // Add progress tracking

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
    
    // Reset progress
    pdfGenerationProgress.value = 0
    
    element.classList.remove('hidden') // Show section
    await nextTick() // Wait for DOM render
    await nextTick() // let DOM re-render with full size
    
    try {
      // Set loading state to true
      isGeneratingPDF.value = true
      
      // Update progress - DOM preparation
      pdfGenerationProgress.value = 10
      
      // Start progress simulation for the image conversion part
      // which is usually the slowest
      const progressInterval = setInterval(() => {
        // Don't progress past 70% until we actually have the image
        if (pdfGenerationProgress.value < 70) {
          pdfGenerationProgress.value += Math.floor(Math.random() * 3) + 1
        }
      }, 200)
      
      // Generate image using dom-to-image
      let imgData
      if (options.useCompression) {
        imgData = await domtoimage.toJpeg(element, {
          quality: options.quality,
          bgcolor: '#FFFFFF',
          scale: options.scale,
          style: {
            transform: 'scale(1)',
            transformOrigin: 'top left',
            width: '1440px',
          },
        })
      } else {
        imgData = await domtoimage.toPng(element, {
          bgcolor: '#FFFFFF',
          scale: options.scale
        })
      }
      
      // Image generated, stop the interval and set progress to 75%
      clearInterval(progressInterval)
      pdfGenerationProgress.value = 75
      
      // Standard A4 width in mm and calculate height proportionally
      const pdfWidth = 210
      const aspectRatio = element.offsetHeight / element.offsetWidth
      const pdfHeight = pdfWidth * aspectRatio
      
      // Progress update - PDF initialization
      pdfGenerationProgress.value = 85
      
      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [pdfWidth, pdfHeight]
      })
      console.log("Capturing")
      
      // Progress update - PDF adding image
      pdfGenerationProgress.value = 90
      
      // Add image to PDF
      pdf.addImage(
        imgData,
        options.useCompression ? 'JPEG' : 'PNG',
        0, 0,
        pdfWidth, pdfHeight
      )
      console.log("Saving")
      
      // Progress update - Almost done
      pdfGenerationProgress.value = 95
      
      // Save PDF
      pdf.save(fileName)
      // 👉 Re-hide the element after capturing
      element.classList.add('hidden')
      
      // Complete!
      pdfGenerationProgress.value = 100
      
      // Keep 100% visible briefly before resetting
      setTimeout(() => {
        if (!isGeneratingPDF.value) {
          pdfGenerationProgress.value = 0
        }
      }, 1000)
      
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
      isGeneratingPDF, // loading state
      pdfGenerationProgress // Add progress percentage
    }
  }
})