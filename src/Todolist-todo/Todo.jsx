export default function Todo({text, isCompleted, isDeleted}) {
  if (isDeleted) {
    return null; 
  } else {
    return (
      <li>
        {text} {isCompleted && "✅" }
      </li>
    )
  }
}

  