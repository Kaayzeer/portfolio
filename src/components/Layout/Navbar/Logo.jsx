export const Logo = ({ color }) => (
  <svg
    width="35"
    height="35"
    viewBox="0 0 550 550"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="550" height="550" rx="275" fill="white" />
    <circle cx="275" cy="275" r="250" fill={color} />
    <line
      x1="198.574"
      y1="36.7888"
      x2="338.948"
      y2="516.68"
      stroke="white"
      strokeWidth="30"
    />
    <line x1="343" y1="25" x2="343" y2="525" stroke="white" strokeWidth="30" />
    <line x1="195" y1="34" x2="195" y2="534" stroke="white" strokeWidth="30" />
  </svg>
);
