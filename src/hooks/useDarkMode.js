import {useLocalStorage} from './useLocalStorage.js';
import {useEffect} from "react"

export const useDarkMode = () =>{

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  const thisAppBody = document.querySelector('body');

  console.log("anything here?", darkMode);

  useEffect(()=>{
    if(darkMode){
      thisAppBody.classList.add('dark-mode');
    } else{
      thisAppBody.classList.remove('dark-mode');
    }
  }, [darkMode])

  //basically i'll need an eventListener on that switch that will add the class 'dark-mode' to the div w/ 'App' as a class

  /*if(darkMode){
    console.log("I got something from the dom, useDarkMode.js", thisApp);
    thisApp.className = 'dark-mode';
  } else {
    console.log('it was false', darkMode);
  }*/

  return [darkMode, setDarkMode];
}
