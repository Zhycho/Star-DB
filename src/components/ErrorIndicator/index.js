import './index.css';
import icon from './death-star.png'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={ icon } alt="Death Star"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we have sent droids to fix it already)
      </span>
    </div>
  );
};
  
export default ErrorIndicator;