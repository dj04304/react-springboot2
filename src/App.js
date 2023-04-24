import './App.css';
import ListPage from './pages/ListPage';

// 글쓰기, 글삭제, 글 목록보기
// 글쓰기와 글목록보기 두 가지 페이지가 필요, 글 삭제는 글 목록보기에서 하면된다.

function App() {
  return (
    <>
      <ListPage />
    </>
  );
}

export default App;
