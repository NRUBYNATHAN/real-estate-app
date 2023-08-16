import Search from "../components/Search.jsx"
import "./Banner.css"
function Banner() {
  return (
    <section className="banners">
        <div className="banner_contain">
            <div className="banner_main">
                <h1 className="banner_h1"><span className="banner_span">Rent</span> Your Dream House With Us .</h1>
                <p className="banner_p">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Maiores eveniet aspernatur, praesentium velit, 
                     itaque illum cumque natus iusto cum necessitatibus voluptas
                      libero magnam officiis et neque sit magni! Maxime, harum!
                </p>
            </div>
            <div className="banner_img">
                <img className="img" src="https://us.123rf.com/450wm/sinenkiy/sinenkiy2305/sinenkiy230500063/203620976-house-facade-with-door-and-window-at-night-home-entrance-with-light-from-lanterns-on-brick-wall-and.jpg?ver=6"/>
            </div>
        </div>
      <Search/>
    </section>
  )
}

export default Banner
