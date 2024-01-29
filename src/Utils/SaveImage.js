import html2canvas from "html2canvas";

const SaveImage = async (printRef) => {
  const element = printRef.current;
  const convas = await html2canvas(element);

  const data = convas.toDataURL("image/png");
  const link = document.createElement("a");

  if (typeof link.download === "string") {
    link.href = data;
    link.download = "image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(data);
  }
};

export default SaveImage;
