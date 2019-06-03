const Header = variables => {
  return {
    render: async () => {
      const view =  `
      <div class="container">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/#/">
                KzT.to
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
                  Home
                </a>
                <a class="navbar-item" href="/#/work">
                  Work
                </a>
                <a class="navbar-item" href="/#/code">
                  Code
                </a>
              </div>
            </div>

        </nav>
      </div>
      `;
      return view;
    },
    afterRender: async () => {
    },
  };
};

export default Header;
