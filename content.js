(function() {
  function redirectToFollowing() {
    const url = new URL(window.location.href);
    const isX = url.hostname === 'x.com' || url.hostname === 'twitter.com';
    const isHome = url.pathname === '/' || url.pathname === '/home';
    const isFollowing = url.searchParams.get('f') === '1';

    if (isX && isHome && !isFollowing) {
      url.pathname = '/home';
      url.searchParams.set('f', '1');
      window.location.replace(url.toString());
    }
  }

  redirectToFollowing();

  const pushState = history.pushState;
  history.pushState = function() {
    pushState.apply(this, arguments);
    redirectToFollowing();
  };

  window.addEventListener('popstate', redirectToFollowing);
})();
