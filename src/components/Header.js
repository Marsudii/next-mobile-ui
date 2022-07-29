import Image from "next/image";

export default function Header() {
  return (
    <div className="header">
      <div className="nav">
        <div className="info">
          <p className="nav-p">Selamat Datang</p>
          <p className="nav-p">Marsudi</p>
        </div>
        
        <Image
          className="nav img"
          src="/assets/img/user.jpg"
          alt="me"
          width="45px"
          height="45px"
          
        />
      
      </div>
      
      <div className="search">
        <span className="las la-search"></span>
        <input type="text" id="first" name="first" placeholder="Cari Buku ?"/>
      </div>

    </div>
  );
}
