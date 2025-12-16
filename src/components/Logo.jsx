// Malnad Family Restaurant Logo Component
// Premium lettermark "M" with integrated leaf element

function Logo({ size = 40, className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Custom "M" lettermark with integrated leaf */}
      <g>
        {/* Left stroke of M */}
        <path 
          d="M15 85 L15 15 L25 15 L25 75 L15 85 Z" 
          fill="#D4AF37" 
        />
        
        {/* Right stroke of M */}
        <path 
          d="M75 85 L75 15 L85 15 L85 75 L75 85 Z" 
          fill="#D4AF37" 
        />
        
        {/* Center V of M with leaf integration */}
        <path 
          d="M25 15 L45 55 L50 45 L55 55 L75 15 L65 15 L50 35 L35 15 Z" 
          fill="#D4AF37" 
        />
        
        {/* Integrated leaf element on right stroke */}
        <path 
          d="M78 25 Q85 20 88 25 Q85 30 78 28 Q75 26 78 25 Z" 
          fill="#16a34a" 
        />
        
        {/* Leaf vein detail */}
        <path 
          d="M78 25 L85 25" 
          stroke="#16a34a" 
          strokeWidth="0.5" 
        />
      </g>
    </svg>
  );
}

export default Logo;