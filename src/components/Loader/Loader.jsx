import './Loader.css'

export default function Loader({
  className
}) {
  return <span className={`loader${className ? ' ' + className : ''}`}></span>
}