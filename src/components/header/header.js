import './header.scss';

const Header = variables => {
  return {
    render: async props => {
      const view =  `
      <div class="container header">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item" href="${props.siteUrl}">
              <span class="icon">
                <i class="fas fa-copyright"></i>
              </span>&nbsp;${props.brandName || props.ownerName}
            </a>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarBasicExample" class="navbar-menu is-active" aria-expanded="false">
            <div class="navbar-end">
              <a class="navbar-item" href="/#/">
                <span class="icon p-r-sm p-l-sm">
                  <i class="fas fa-coffee" data-fa-transform="rotate-352"></i>
                </span>&nbsp;
                Home
              </a>
              <a class="navbar-item" href="/#/work">
                <span class="icon p-r-sm p-l-sm">
                  <i class="fas fa-laptop" data-fa-transform="rotate-8"></i>
                </span>&nbsp;
                Work
              </a>
            </div>
          </div>
        </nav>
      </div>
      `;
      return view;
    },
    afterRender: async () => {
      let burger = document.querySelector('.burger');
      let burgerHandleClick = () => {
        navbarMenu.style.display = (navbarMenu.style.display === 'block') ? 'none' : 'block';
      };
      burger.addEventListener('click', burgerHandleClick);
      let navbarMenu = document.querySelector('.navbar-menu');
      let navBarMenuDisplayStyle = navbarMenu.style.display;
      let setDisplayStyle = () => {
        console.log('', window.innerWidth);
        navbarMenu.style.display = window.innerWidth < 1024 ? 'none' : navBarMenuDisplayStyle;
      }
      setDisplayStyle();
      window.onresize = () => setDisplayStyle();
    },
  };
};

export default Header;
