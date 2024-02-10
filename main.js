function downloadCV() {
    const fileContent = "This is the content of Sherry's CV in PDF format.";
    const blob = new Blob([fileContent], { type: 'application/pdf' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'sherry_CV.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }