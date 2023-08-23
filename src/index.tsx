import ReactDOM from 'react-dom/client';
import {MainLayout} from "./layouts";
import {Provider} from "react-redux";
import {store} from "./redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <MainLayout/>
    </Provider>
);


