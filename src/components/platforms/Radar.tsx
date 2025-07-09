import './Radar.css';

export default function Radar() {
  return (
    <div className="radar">
      <div className="sweep"></div>
      <div className="dot" style={{ top: '20%', left: '30%' }}></div>
      <div className="dot" style={{ top: '50%', left: '75%' }}></div>
      <div className="dot" style={{ top: '70%', left: '40%' }}></div>
    </div>
  );
}
