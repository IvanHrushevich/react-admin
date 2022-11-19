import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import TopBar from "./scenes/global/TopBar";
// import Bar from "./scenes/bar";
import Contacts from "./scenes/contacts";
// import FAQ from "./scenes/faq";
import Form from "./scenes/form";
// import Geography from "./scenes/geography";
import Invoices from "./scenes/invoices";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
import Team from "./scenes/team";
import Calendar from "./scenes/calendar";
import { ColorModeContext, useMode } from "./theme";

const App: FC = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <ProSidebarProvider>
            <Sidebar />
            <main className="content">
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                {/* <Route path="/bar" element={<Bar />} /> */}
                {/* <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                {/* <Route path="/faq" element={<FAQ />} /> */}
                <Route path="/calendar" element={<Calendar />} />
                {/* <Route path="/geography" element={<Geography />} /> */}
              </Routes>
            </main>
          </ProSidebarProvider>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
