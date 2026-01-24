const StarIcon = ({ filled, onClick, h = 24, w = 24, strk = 2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={h}
    height={w}
    fill={filled ? "gold" : "none"}
    strokeWidth={strk}
    stroke="currentColor"
    viewBox="0 0 24 24"
    onClick={onClick}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5.45 5.31L17.91 22 12 18.27 6.09 22l1.36-7.42L2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default StarIcon;
