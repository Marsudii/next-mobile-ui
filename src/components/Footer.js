

export default function Footer() {
  return (
    <div className="bottom-nav">
        <div className="bottom-inner">
            <div className="bottom-main">
                <div className="nav-items">
                   
                    <div className="nav-item">
                    <a href="/story">
                        <span className="las la-book"></span>
                        <p>Story </p>
                        </a>
                    </div>
                    
                    <div className="nav-item">
                    <a href="/category">
                        <span className="las la-list"></span>
                        <p>Kategori</p>
                        </a>
                    </div>
                </div>
                <div className="nav-item-main">
                <a href="/">
                    <div>
                        <span className="las la-home"></span>
                    </div>
                    </a>
                </div>
                <div className="nav-items">
                    <div className="nav-item">
                    <a href="/quiz">
                        <span className="las la-file-alt"></span>
                        <p>Kuis</p>
                        </a>
                    </div>
                    <div className="nav-item">
                    <a href="/information">
                        <span className="las la-exclamation-circle"></span>
                        <p>Info</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
