import logoImg from "../../assets/LWSBlog.svg";

export default function Header() {
  return (
    <nav className="py-1 border-b">
      <div className="navbar-container">
        <div className="logo">
          <a href="index.html">
            <img src={logoImg} alt="search" />
          </a>
        </div>

        <div className="auth-buttons">
          <button className="btn btn-primary">sign in</button>
          <button className="btn btn-outline">sign up</button>
        </div>
      </div>
    </nav>
  );
}
