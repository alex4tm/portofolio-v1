import './ChangeTheme.css';

const changeThemeDark = () => {

    document.documentElement.style.setProperty('--color-background-main', '18, 18, 18') // #121212
    document.documentElement.style.setProperty('--color-background-second', '53, 53, 53') // #353535
    document.documentElement.style.setProperty('--color-main-700', '187, 133, 248') // #BB85F8
    document.documentElement.style.setProperty('--color-primary', '219, 177, 250') // #DBB1FA
  //   let darkThemeEnabled = document.documentElement.style.setProperty('--color-background-second', 'black');
  //   localStorage.setItem('dark-theme-enabled', darkThemeEnabled);

  // if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {

  //   document.documentElement.style.setProperty('--color-background-second', 'red')
  // };
}

export default changeThemeDark;

