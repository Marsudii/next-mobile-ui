
import Link from 'next/link';


export default function Footer() {
  return (
    <div className="bottom-nav">
        <div className="bottom-inner">
            <div className="bottom-main">
                <div className="nav-items">
                   
                    <div className="nav-item">
                    <Link href="/story" >
                 
                   
                        <p> <span className="las la-book"></span> Story </p>
                  
                    </Link>
                    </div>
                    
                    <div className="nav-item">
                    <Link href="/category">
                 
                   
                 <p> <span className="las la-list"></span> Kategori </p>
           
             </Link>
                    </div>
                </div>
                <div className="nav-item-main">
                <Link href="/">
                    <div>
                        <span className="las la-home"></span>
                    </div>
                    </Link>
                </div>
                <div className="nav-items">
                    <div className="nav-item">
                    <Link href="/quiz">
                       
                        <p> <span className="las la-file-alt"></span> Kuis</p>
                        </Link>
                    </div>
                    <div className="nav-item">
                    <Link href="/information">
                       
                        <p> <span className="las la-exclamation-circle"></span> Info</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
