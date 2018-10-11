// importing component
import Navbar from './Navbar'
import ThemeChange from './ThemeChange'
import FontChange from './FontChange'
import TopScroll from './TopScroll'

// instantiating component
// those component is not pure. its modified dom directly
// but I am getting benefit by ::divsion of work::
new Navbar();
new ThemeChange();
new FontChange();
new TopScroll();
