
const Title = () => (
   <a href="/" className="logo-heading">
     <p> <b>FoodVilla</b> </p> 
   </a>
 );

 const HeaderComponent = () => {
   return (
     <div className="header">
       <Title />
       <div className="nav-items">
         <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
           <li>Cart</li>
         </ul>
       </div>
     </div>
   );
 };
export default HeaderComponent