import React from 'react';
import {ConfigProvider} from 'antd';
import {IntlProvider} from 'react-intl';
// import {useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import themes from './config/theme/theme.config';
import AppLocale from './config/translation';
// import MainProvider from './Main.style';
import 'antd/dist/antd.css';

export default function AppProvider({children}) {
  // const {locale} = useSelector((state) => state.LanguageSwitcher.language);
  // const {themeName} = useSelector((state) => state.ThemeSwitcher.changeThemes);
  const currentAppLocale = AppLocale['es'];
  return (
    <ConfigProvider locale={currentAppLocale.locale}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <ThemeProvider theme={themes['defaultTheme']}>
          {/* <MainProvider>  */}
          {children}
          {/* </MainProvider> */}
        </ThemeProvider>
        {/* <ThemeProvider theme={themes[themeName]}>{children}</ThemeProvider> */}
      </IntlProvider>
    </ConfigProvider>
  );
}
