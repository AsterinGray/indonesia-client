import { store, wrapper } from "@/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default wrapper.withRedux(App);
