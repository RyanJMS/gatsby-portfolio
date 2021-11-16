import React , {useEffect} from "react"
import Drawer from '../components/drawer'
import '../styles/style.css'

const Home = () => {

  useEffect(() => {
    document.title = "Ryan Schock | Web Developer"
  }, [])
  return(
    <div>
      <Drawer />
    </div>
  )
}
 
export default Home