import './aside.css'
import Figure from 'react-bootstrap/Figure';
import Navbar from 'react-bootstrap/Navbar'

export const Aside  =  (props) => {
    return (
  <div className={`${props.classStyle} asideStyles `} >  
    <Navbar bg="dark" data-bs-theme="dark" className='span'>

      <Figure>
       <Figure.Image
         width={171}
         height={180}
         alt="171x180"
         src="https://www.appcodemia.com/wp-content/uploads/2021/05/React-Hook.png"
       />
       <Figure.Caption>
         You can learn about React Hooks to develop your application more easy. Try it!
       </Figure.Caption>
      </Figure>
      </Navbar>     
       </div>

    )
}