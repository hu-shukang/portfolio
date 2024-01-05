import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // 只有在客户端渲染时才执行，避免在服务器端渲染时出现问题
    if (typeof window !== 'undefined') {
      // 处理窗口大小变化的函数
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // 监听窗口大小变化
      window.addEventListener('resize', handleResize);

      // 立即调用一次以获取初始大小
      handleResize();

      // 返回一个清理函数
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // 空数组保证效果只在挂载和卸载时运行

  return windowSize;
};

export default useWindowSize;
