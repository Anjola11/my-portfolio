import './MenuButton.css'

export default function MenuButton({ onClick }) {
  return (
    <button className="menu-button" onClick={onClick} aria-label="Open menu">
      <span className="menu-icon">≡</span>
      <span className="menu-label">MENU</span>
    </button>
  )
}
