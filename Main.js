
function Main(){

    return(
        
        <div className="main">
        <div className="center">

        <div className="menu">
          <div className="logo">
            <h3>Celiane.Code</h3>
          </div>
          <div className="item-menu">
            <a href="#">Home</a>
            <a href="#">Login</a>
          </div>
        </div>

        <div className="form">
          <form>
          <h2>Contact</h2>
          <div className="items-form">
            <input type="text" value={'name'} />
            <input type="text" value={'e-mail'}/>
            <input type="submit" value={'ENTER'} />

          </div>

          </form>


        </div>

        </div>

      </div>

    )
}

export default Main;