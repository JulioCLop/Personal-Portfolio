
import Logo from '../assets/newLogo.png';
  
  function LoadInfo() {
    const day = new Date();
    const hours = day.getHours();

    if (hours < 12) {
        const morning = "Morning!";
            return morning;
        
    } else if (hours < 18) {
        const afternoon = "Afternoon!";
            return afternoon
        
    } else {
        const evening = "Evening!";
         return evening;
    }
}

function LoadColor() {
    const day = new Date();
    const hours = day.getHours();

    if (hours < 12) {
        const background1 = `${Logo}`;
            return background1;
        
    } else if (hours <= 18) {
        const background2 = `${Logo}`;
            return background2
        
    } else {
        const background3 = `${Logo}`;
         return background3;
    }
 
}


export { LoadColor, LoadInfo };