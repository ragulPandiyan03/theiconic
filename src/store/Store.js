import { legacy_createStore as createStore } from "redux";
import reducers from "../reducer/Combinereducer";
const store=createStore(reducers);
export default store;