import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import icon from "../imports/Head.JPG";

export default function App() {
  useEffect(() => {
    document.title = "Zong's Portfolio";

    const link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (link) {
      link.href = icon;
    } else {
      // 不存在就新建一个
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = icon;
      document.head.appendChild(newLink);
    }
  }, []);

  return <RouterProvider router={router} />;
}