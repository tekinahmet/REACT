import { createContext } from "react";

// Bos bir merkezi state yapisini olusuturur.
const StoreContext = createContext();


// Baska componentlerden erisilebilmesi icin export edilmelidir.
export default StoreContext;