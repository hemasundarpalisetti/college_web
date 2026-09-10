import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Trigger clean browser printing for an element
 */
export function printDocument() {
  window.print();
}

/**
 * Export a DOM element to an official A4 PDF document
 */
export async function downloadElementAsPdf(elementId, filename = 'academic-report.pdf') {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`[PDF] Element #${elementId} not found`);
    return false;
  }

  try {
    // Generate high resolution canvas
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // A4 aspect ratio calculations
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const ratio = canvasWidth / canvasHeight;

    const margin = 10; // 10mm margin
    const printWidth = pdfWidth - (margin * 2);
    const printHeight = printWidth / ratio;

    let heightLeft = printHeight;
    let position = margin;

    pdf.addImage(imgData, 'PNG', margin, position, printWidth, printHeight);

    // Save PDF
    pdf.save(filename);
    return true;
  } catch (error) {
    console.error('[PDF] Failed to generate PDF:', error);
    // Graceful fallback to print
    window.print();
    return false;
  }
}
