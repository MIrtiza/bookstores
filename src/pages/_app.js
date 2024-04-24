import '@/styles/style.scss'
import { useState, useEffect } from 'react'
import { Provider } from "react-redux";
import {store} from "@/redux/store"



export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  }else{
  return <Provider store={store}>
  <Component {...pageProps} />
  </Provider>
  }

}
