export default function AlertButton({ text, message }) {

  function handleClick() {
    const p = document.getElementById("text");

    if (p.innerText === message) {
      p.innerText = "Ada yang berubah";
    } else {
      p.innerText = message;
    }
  }

  return (
    <>
      <button onClick={handleClick}>{text}</button>
      <p id="text">Ada yang berubah</p>
    </>
  );
}
