import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Mobile, Pc } from './responsive';
import { RecoilRoot } from 'recoil';
import Start from './pages/Start';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Main from './pages/Main';
import DiaryWritePage from './pages/DiaryWritePage';
import AnalysisPage from './pages/AnalysisPage';
import Friend from './pages/Friend';
import Mypage from './pages/Mypage';
import Survey from './pages/Survey';
import Welcome from './pages/Welcome';
import Alarm from './pages/Alarm';
import Search from './pages/Search';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className='bg-slate-100'>
          <section className='w-[390px] h-screen flex flex-col m-auto bg-white'>
            <Pc className='flex flex-col m-auto'>
              <div className='flex-1 relative'>
                <Routes>
                  <Route path='/' element={<Start />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<SignUp />} />
                  <Route path='/survey' element={<Survey />} />
                  <Route path='/welcome' element={<Welcome />} />
                  <Route exact path='/' element={<Home />}>
                    <Route path='/main' element={<Main />} />
                    <Route path='/diary/:selectedDate' element={<DiaryWritePage />} />
                    <Route path='/analysis/:selectedDate' element={<AnalysisPage />} />
                    <Route path='/mypage' element={<Mypage />} />
                    <Route path='/friend' element={<Friend />} />
                    <Route path='/alarm' element={<Alarm />} />
                    <Route path='/search' element={<Search />} />
                  </Route>
                </Routes>
              </div>
            </Pc>
            <Mobile className='flex flex-col m-auto'>
              <div className='flex-1 relative'>
                <Routes>
                  <Route path='/' element={<Start />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<SignUp />} />
                  <Route path='/survey' element={<Survey />} />
                  <Route exact path='/' element={<Home />}>
                    <Route path='/main' element={<Main />} />
                    <Route path='/diary/:selectedDate' element={<DiaryWritePage />} />
                    <Route path='/analysis/:selectedDate' element={<AnalysisPage />} />
                    <Route path='/mypage' element={<Mypage />} />
                    <Route path='/friend' element={<Friend />} />
                    <Route path='/alarm' element={<Alarm />} />
                    <Route path='/search' element={<Search />} />
                  </Route>
                </Routes>
              </div>
            </Mobile>
          </section>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
