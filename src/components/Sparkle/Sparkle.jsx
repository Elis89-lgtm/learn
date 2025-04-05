import { useEffect, useState } from 'react';
const Sparkles = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const createSparkle = () => {
      const id = Math.random();
      setSparkles(prev => [
        ...prev,
        {
          id,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        },
      ]);

      setTimeout(() => {
        setSparkles(prev => prev.filter(sparkle => sparkle.id !== id));
      }, 2000);
    };

    const interval = setInterval(createSparkle, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sparkles-container">
      {sparkles.map(({ id, x, y }) => (
        <div key={id} className="sparkle" style={{ left: x, top: y }}></div>
      ))}
    </div>
  );
};

export default Sparkles;
