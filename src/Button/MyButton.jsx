export default function MyButton({text, masage}) {
 function handleClick(e) {
  console.info(e)
  alert(masage);
 }
 return (
  <button onClick={handleClick}>{text}</button>
 )
}